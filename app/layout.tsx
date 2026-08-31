import type {Metadata} from 'next';
import './globals.css';
import {headers} from 'next/headers';
import {Suspense} from 'react';
import AnalyticsConsent from '@/components/AnalyticsConsent';

export const metadata:Metadata={
  metadataBase:new URL('https://www.margheraveniceapartments.com'),
  title:'Marghera Venice Apartments',
  description:'Due appartamenti a Marghera con parcheggio privato, collegamenti H24 per Venezia e accoglienza Pet Friendly e Family Friendly.',
  applicationName:'Marghera Venice Apartments',
  authors:[{name:'Marghera Venice Apartments'}],
  creator:'Marghera Venice Apartments',
  publisher:'Marghera Venice Apartments',
  openGraph:{
    title:'Marghera Venice Apartments',
    description:'Rossi Apartment e Dimora Castelli: il tuo soggiorno vicino a Venezia con parcheggio privato e collegamenti H24.',
    type:'website',
    url:'https://www.margheraveniceapartments.com',
    siteName:'Marghera Venice Apartments',
    locale:'it_IT',
    images:[{url:'/images/home-rialto-vincenzo-landino.webp',alt:'Ponte di Rialto e Canal Grande a Venezia'}]
  },
  twitter:{
    card:'summary_large_image',
    title:'Marghera Venice Apartments',
    description:'Due appartamenti a Marghera con parcheggio privato e collegamenti H24 per Venezia.',
    images:['/images/home-rialto-vincenzo-landino.webp']
  },
  robots:{index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}},
  icons:{icon:'/icon.png',shortcut:'/favicon.ico',apple:'/apple-icon.png'}
};

export default async function RootLayout({children}:{children:React.ReactNode}){
  const requestHeaders=await headers();
  const requestedLang=requestHeaders.get('x-site-lang');
  const lang=['en','de','fr','es','zh'].includes(requestedLang||'')?requestedLang!:'it';
  const htmlLang=lang==='zh'?'zh-CN':lang;
  const organizationJsonLd={
    '@context':'https://schema.org',
    '@type':'Organization',
    name:'Marghera Venice Apartments',
    url:'https://www.margheraveniceapartments.com',
    logo:'https://www.margheraveniceapartments.com/images/logo.png',
    sameAs:[
      'https://www.instagram.com/margheraveniceapartments/',
      'https://www.facebook.com/margheraveniceapartments/'
    ]
  };
  return <html lang={htmlLang} data-scroll-behavior="smooth"><head>
    <script dangerouslySetInnerHTML={{__html:`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = window.gtag || gtag;
      gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        wait_for_update: 500
      });
    `}}/>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-W2HWSG9YG1"/>
  </head><body className="font-sans antialiased"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationJsonLd)}}/>{children}<Suspense fallback={null}><AnalyticsConsent lang={lang as 'it'|'en'|'de'|'fr'|'es'|'zh'}/></Suspense></body></html>
}
