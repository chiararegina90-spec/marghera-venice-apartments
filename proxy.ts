import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {guestCookieName,hasValidGuestCookie,type GuestApartment} from './lib/guest-auth';

const guestLanguages=new Set(['it','en','de','fr','es','zh']);

async function authenticated(request:NextRequest, apartment:GuestApartment){
  return hasValidGuestCookie(apartment,request.cookies.get(guestCookieName(apartment))?.value);
}

function privateHeaders(response:NextResponse){
  response.headers.set('X-Robots-Tag','noindex, nofollow, noarchive, nosnippet, noimageindex');
  response.headers.set('Cache-Control','private, no-store, max-age=0');
  return response;
}

function promoteGuestCookie(request:NextRequest,response:NextResponse,apartment:GuestApartment){
  const name=guestCookieName(apartment);
  const value=request.cookies.get(name)?.value;
  if(!value) return response;

  // Always refresh the authenticated token at Path=/ so it is also sent to
  // /guest-content/... image requests. This transparently migrates sessions
  // created by the older Path=/guest implementation without forcing guests
  // to log in again.
  response.cookies.set(name,value,{
    httpOnly:true,
    secure:true,
    sameSite:'lax',
    path:'/',
    maxAge:60*60*24*30,
  });
  return response;
}

export async function proxy(request:NextRequest){
  const path=request.nextUrl.pathname;

  // Backward-compatible redirects from the old scaffold URL.
  if(path==='/guest/castelli'||path.startsWith('/guest/castelli/')){
    const suffix=path.slice('/guest/castelli'.length);
    return NextResponse.redirect(new URL(`/guest/dimora-castelli${suffix}`,request.url),308);
  }

  // If a guest still has the old /guest-scoped cookie, refresh it at Path=/
  // as soon as they visit the apartment landing page. This makes protected
  // images available immediately, before the guest even chooses a language.
  const guestRoot=path.match(/^\/guest\/(rossi|dimora-castelli)\/?$/);
  if(guestRoot){
    const apartment=guestRoot[1] as GuestApartment;
    if(await authenticated(request,apartment)){
      return privateHeaders(promoteGuestCookie(request,NextResponse.next(),apartment));
    }
  }

  // Clean guest-language URLs are authenticated and internally rewritten to static Welcome Book HTML.
  const clean=path.match(/^\/guest\/(rossi|dimora-castelli)\/(it|en|de|fr|es|zh)\/?$/);
  if(clean){
    const apartment=clean[1] as GuestApartment;
    const lang=clean[2];
    if(!guestLanguages.has(lang)||!(await authenticated(request,apartment))){
      return privateHeaders(NextResponse.redirect(new URL(`/guest/${apartment}`,request.url),307));
    }
    const response=NextResponse.rewrite(new URL(`/guest-content/${apartment}/${lang}.html`,request.url));
    return privateHeaders(promoteGuestCookie(request,response,apartment));
  }

  // Prevent bypassing the clean URLs by requesting the underlying static files directly.
  if(path.startsWith('/guest-content/')){
    let apartment:GuestApartment|null=null;
    if(path.includes('/rossi/')) apartment='rossi';
    if(path.includes('/dimora-castelli/')||path.includes('/assets/castelli/')) apartment='dimora-castelli';
    if(path.includes('/assets/rossi/')) apartment='rossi';

    // Shared CSS is harmless; all apartment-specific HTML/images remain protected.
    if(path==='/guest-content/assets/welcome.css') return NextResponse.next();
    if(apartment&&!(await authenticated(request,apartment))){
      return privateHeaders(NextResponse.redirect(new URL(`/guest/${apartment}`,request.url),307));
    }
    if(!apartment) return privateHeaders(NextResponse.redirect(new URL('/guest',request.url),307));
    return privateHeaders(NextResponse.next());
  }

  const headers=new Headers(request.headers);
  const locale=['en','de','fr','es','zh'].find(l=>path===`/${l}`||path.startsWith(`/${l}/`))||'it';
  headers.set('x-site-lang',locale);
  return NextResponse.next({request:{headers}});
}

export const config={matcher:['/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|images/).*)']};
