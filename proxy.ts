import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export function proxy(request:NextRequest){
  const headers=new Headers(request.headers);
  const path=request.nextUrl.pathname;
  const locale=['en','de','fr','es','zh'].find(l=>path===`/${l}`||path.startsWith(`/${l}/`))||'it';
  headers.set('x-site-lang',locale);
  return NextResponse.next({request:{headers}});
}

export const config={matcher:['/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|images/).*)']};
