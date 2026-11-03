import {ImageResponse} from 'next/og';
import type {NextRequest} from 'next/server';


const copy={
  it:{subtitle:'Alloggi per aziende e trasfertisti',places:'Marghera • Mestre • Venezia'},
  en:{subtitle:'Corporate housing for employees and contractors',places:'Marghera • Mestre • Venice'},
  de:{subtitle:'Firmenwohnungen für Mitarbeiter und Monteure',places:'Marghera • Mestre • Venedig'},
  fr:{subtitle:'Logements pour entreprises et salariés en déplacement',places:'Marghera • Mestre • Venise'},
  es:{subtitle:'Alojamiento para empresas y trabajadores desplazados',places:'Marghera • Mestre • Venecia'},
  zh:{subtitle:'企业员工住宿与商务公寓',places:'Marghera • Mestre • 威尼斯'}
} as const;

export async function GET(request:NextRequest){
  const raw=request.nextUrl.searchParams.get('lang')||'it';
  const lang=(raw in copy?raw:'it') as keyof typeof copy;
  const c=copy[lang];
  const logo='https://www.margheraveniceapartments.com/images/logo.png';

  return new ImageResponse(
    <div style={{width:'1200px',height:'630px',display:'flex',position:'relative',overflow:'hidden',background:'#f4f1eb',fontFamily:'Arial, Helvetica, sans-serif',color:'#0b2e52'}}>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,#f8f5ee 0%,#eef1f4 52%,#dfe7ed 100%)'}}/>
      <div style={{position:'absolute',width:760,height:760,borderRadius:9999,border:'54px solid rgba(65,96,124,.07)',right:-230,top:-350}}/>
      <div style={{position:'absolute',width:900,height:270,borderRadius:'50%',background:'#9eb2c2',opacity:.35,right:-120,bottom:-145,transform:'rotate(-4deg)'}}/>
      <div style={{position:'absolute',width:1100,height:300,borderRadius:'50%',background:'#0b2e52',left:-170,bottom:-205,transform:'rotate(4deg)'}}/>
      <div style={{position:'absolute',width:1120,height:6,background:'#c79b3b',left:-40,bottom:112,transform:'rotate(4deg)',opacity:.95}}/>

      <div style={{position:'relative',zIndex:2,display:'flex',alignItems:'center',width:'100%',padding:'62px 72px 95px 66px',gap:62}}>
        <div style={{display:'flex',width:360,height:360,alignItems:'center',justifyContent:'center',flexShrink:0}}>
          <img src={logo} width="350" height="350" style={{objectFit:'contain'}}/>
        </div>

        <div style={{display:'flex',flexDirection:'column',flex:1,paddingTop:4}}>
          <div style={{display:'flex',fontFamily:'Georgia, Times New Roman, serif',fontSize:52,letterSpacing:5,lineHeight:1.05,whiteSpace:'nowrap'}}>MARGHERA VENICE</div>
          <div style={{display:'flex',alignItems:'center',gap:18,marginTop:10}}>
            <div style={{width:128,height:3,background:'#c79b3b'}}/>
            <div style={{fontSize:27,letterSpacing:11,fontWeight:600}}>APARTMENTS</div>
            <div style={{width:128,height:3,background:'#c79b3b'}}/>
          </div>
          <div style={{display:'flex',fontFamily:'Georgia, Times New Roman, serif',fontStyle:'italic',fontSize:112,lineHeight:.98,marginTop:25}}>Corporate</div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',background:'#ead5a7',borderRadius:999,padding:'15px 28px',marginTop:17,fontSize:29,fontWeight:700,whiteSpace:'nowrap'}}>{c.subtitle}</div>
          <div style={{display:'flex',justifyContent:'center',marginTop:22,fontSize:26,letterSpacing:5}}>{c.places}</div>
        </div>
      </div>
    </div>,
    {width:1200,height:630,headers:{'Cache-Control':'public, max-age=86400, s-maxage=604800'}}
  );
}
