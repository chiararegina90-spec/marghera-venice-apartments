import {NextRequest,NextResponse} from 'next/server';
import {guestCode,guestCookieName,guestToken,normalizeGuestCode,type GuestApartment} from '@/lib/guest-auth';

const validApartment=(value:string):value is GuestApartment=>value==='rossi'||value==='dimora-castelli';

export async function POST(request:NextRequest){
  const data=await request.formData();
  const apartment=String(data.get('apartment')||'');
  const submitted=normalizeGuestCode(String(data.get('code')||''));

  if(!validApartment(apartment)) return NextResponse.redirect(new URL('/guest',request.url),303);
  const expected=guestCode(apartment);
  if(!expected||submitted!==normalizeGuestCode(expected)){
    return NextResponse.redirect(new URL(`/guest/${apartment}?error=invalid`,request.url),303);
  }

  const response=NextResponse.redirect(new URL(`/guest/${apartment}`,request.url),303);
  response.cookies.set(guestCookieName(apartment),await guestToken(apartment,expected),{
    httpOnly:true,
    secure:true,
    sameSite:'lax',
    path:'/guest',
    maxAge:60*60*24*30,
  });
  response.headers.set('Cache-Control','private, no-store');
  return response;
}
