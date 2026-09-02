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

export async function proxy(request:NextRequest){
  const path=request.nextUrl.pathname;

  // Backward-compatible redirects from the old scaffold URL.
  if(path==='/guest/castelli'||path.startsWith('/guest/castelli/')){
    const suffix=path.slice('/guest/castelli'.length);
    return NextResponse.redirect(new URL(`/guest/dimora-castelli${suffix}`,request.url),308);
  }

  // Clean guest-language URLs are authenticated and internally rewritten to static Welcome Book HTML.
  const clean=path.match(/^\/guest\/(rossi|dimora-castelli)\/(it|en|de|fr|es|zh)\/?$/);
  if(clean){
    const apartment=clean[1] as GuestApartment;
    const lang=clean[2];
    if(!guestLanguages.has(lang)||!(await authenticated(request,apartment))){
      return privateHeaders(NextResponse.redirect(new URL(`/guest/${apartment}`,request.url),307));
    }
    return privateHeaders(NextResponse.rewrite(new URL(`/guest-content/${apartment}/${lang}.html`,request.url)));
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
