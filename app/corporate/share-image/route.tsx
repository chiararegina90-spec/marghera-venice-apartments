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

const logo='https://www.margheraveniceapartments.com/images/logo.png';

function RoundLogo({size}:{size:number}){
  return <div style={{display:'flex',width:size,height:size,borderRadius:9999,overflow:'hidden',flexShrink:0,boxShadow:'0 18px 42px rgba(11,46,82,.18)',background:'#f8f4e9'}}>
    <img src={logo} width={size} height={size} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
  </div>;
}

function HeroDesktop({subtitle,places}:{subtitle:string;places:string}){
  return <div style={{width:'1600px',height:'600px',display:'flex',position:'relative',overflow:'hidden',fontFamily:'Arial, Helvetica, sans-serif',color:'#082f52',background:'linear-gradient(125deg,#dce5ec 0%,#cbd8e2 52%,#b9cad7 100%)'}}>
    <div style={{position:'absolute',width:1120,height:260,borderRadius:'50%',background:'rgba(255,255,255,.28)',left:-190,top:-150,transform:'rotate(-8deg)'}}/>
    <div style={{position:'absolute',width:820,height:390,borderRadius:'50%',border:'52px solid rgba(255,255,255,.14)',right:-220,top:-195,transform:'rotate(8deg)'}}/>
    <div style={{position:'absolute',width:1050,height:220,borderRadius:'50%',background:'rgba(116,145,167,.38)',right:-80,bottom:-118,transform:'rotate(-5deg)'}}/>
    <div style={{position:'absolute',width:1330,height:255,borderRadius:'50%',background:'#0b3458',left:-205,bottom:-180,transform:'rotate(4deg)'}}/>
    <div style={{position:'absolute',width:1260,height:5,background:'#c89b3d',left:-58,bottom:91,transform:'rotate(4deg)'}}/>

    <div style={{position:'relative',zIndex:2,display:'flex',alignItems:'center',width:'100%',padding:'46px 88px 88px 92px',gap:74}}>
      <RoundLogo size={350}/>
      <div style={{display:'flex',flexDirection:'column',flex:1,alignItems:'flex-start'}}>
        <div style={{display:'flex',fontFamily:'Georgia, Times New Roman, serif',fontStyle:'italic',fontSize:132,lineHeight:.9,letterSpacing:-5}}>Corporate</div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',background:'#ead19a',borderRadius:999,padding:'16px 34px',marginTop:30,fontSize:35,fontWeight:700,whiteSpace:'nowrap'}}>{subtitle}</div>
        <div style={{display:'flex',marginTop:29,fontSize:29,fontWeight:600,letterSpacing:7}}>{places}</div>
      </div>
    </div>
  </div>;
}

function HeroMobile({subtitle,places}:{subtitle:string;places:string}){
  return <div style={{width:'900px',height:'720px',display:'flex',position:'relative',overflow:'hidden',fontFamily:'Arial, Helvetica, sans-serif',color:'#082f52',background:'linear-gradient(145deg,#dce5ec 0%,#cad7e1 58%,#b8c9d6 100%)'}}>
    <div style={{position:'absolute',width:690,height:260,borderRadius:'50%',background:'rgba(255,255,255,.25)',left:-170,top:-120,transform:'rotate(-10deg)'}}/>
    <div style={{position:'absolute',width:600,height:310,borderRadius:'50%',border:'42px solid rgba(255,255,255,.14)',right:-210,top:-160}}/>
    <div style={{position:'absolute',width:800,height:210,borderRadius:'50%',background:'rgba(116,145,167,.40)',right:-150,bottom:-110,transform:'rotate(-5deg)'}}/>
    <div style={{position:'absolute',width:980,height:250,borderRadius:'50%',background:'#0b3458',left:-210,bottom:-175,transform:'rotate(5deg)'}}/>
    <div style={{position:'absolute',width:830,height:5,background:'#c89b3d',left:-40,bottom:89,transform:'rotate(5deg)'}}/>

    <div style={{position:'relative',zIndex:2,display:'flex',flexDirection:'column',alignItems:'center',width:'100%',padding:'48px 58px 100px'}}>
      <RoundLogo size={235}/>
      <div style={{display:'flex',fontFamily:'Georgia, Times New Roman, serif',fontStyle:'italic',fontSize:112,lineHeight:.92,letterSpacing:-4,marginTop:19}}>Corporate</div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',background:'#ead19a',borderRadius:999,padding:'14px 26px',marginTop:24,fontSize:29,fontWeight:700,maxWidth:760}}>{subtitle}</div>
      <div style={{display:'flex',marginTop:26,fontSize:23,fontWeight:600,letterSpacing:4,textAlign:'center'}}>{places}</div>
    </div>
  </div>;
}

function SocialCard({subtitle,places}:{subtitle:string;places:string}){
  return <div style={{width:'1200px',height:'630px',display:'flex',position:'relative',overflow:'hidden',background:'#f4f1eb',fontFamily:'Arial, Helvetica, sans-serif',color:'#0b2e52'}}>
    <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,#f8f5ee 0%,#eef1f4 52%,#dfe7ed 100%)'}}/>
    <div style={{position:'absolute',width:760,height:760,borderRadius:9999,border:'54px solid rgba(65,96,124,.07)',right:-230,top:-350}}/>
    <div style={{position:'absolute',width:900,height:270,borderRadius:'50%',background:'#9eb2c2',opacity:.35,right:-120,bottom:-145,transform:'rotate(-4deg)'}}/>
    <div style={{position:'absolute',width:1100,height:300,borderRadius:'50%',background:'#0b2e52',left:-170,bottom:-205,transform:'rotate(4deg)'}}/>
    <div style={{position:'absolute',width:1120,height:6,background:'#c79b3b',left:-40,bottom:112,transform:'rotate(4deg)',opacity:.95}}/>
    <div style={{position:'relative',zIndex:2,display:'flex',alignItems:'center',width:'100%',padding:'62px 72px 95px 66px',gap:62}}>
      <RoundLogo size={350}/>
      <div style={{display:'flex',flexDirection:'column',flex:1,paddingTop:4}}>
        <div style={{display:'flex',fontFamily:'Georgia, Times New Roman, serif',fontStyle:'italic',fontSize:112,lineHeight:.98,marginTop:25}}>Corporate</div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',background:'#ead5a7',borderRadius:999,padding:'15px 28px',marginTop:17,fontSize:29,fontWeight:700,whiteSpace:'nowrap'}}>{subtitle}</div>
        <div style={{display:'flex',justifyContent:'center',marginTop:22,fontSize:26,letterSpacing:5}}>{places}</div>
      </div>
    </div>
  </div>;
}

export async function GET(request:NextRequest){
  const raw=request.nextUrl.searchParams.get('lang')||'it';
  const lang=(raw in copy?raw:'it') as keyof typeof copy;
  const c=copy[lang];
  const format=request.nextUrl.searchParams.get('format');

  if(format==='hero'){
    return new ImageResponse(<HeroDesktop subtitle={c.subtitle} places={c.places}/>,{width:1600,height:600,headers:{'Cache-Control':'public, max-age=86400, s-maxage=604800'}});
  }
  if(format==='hero-mobile'){
    return new ImageResponse(<HeroMobile subtitle={c.subtitle} places={c.places}/>,{width:900,height:720,headers:{'Cache-Control':'public, max-age=86400, s-maxage=604800'}});
  }
  return new ImageResponse(<SocialCard subtitle={c.subtitle} places={c.places}/>,{width:1200,height:630,headers:{'Cache-Control':'public, max-age=86400, s-maxage=604800'}});
}
