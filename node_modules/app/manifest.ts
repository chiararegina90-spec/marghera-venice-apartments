import type {MetadataRoute} from 'next';

export default function manifest():MetadataRoute.Manifest{
  return {
    name:'Marghera Venice Apartments',
    short_name:'Marghera Venice',
    description:'Appartamenti a Marghera vicino a Venezia con parcheggio privato e collegamenti H24.',
    start_url:'/',
    display:'standalone',
    background_color:'#F7F2E8',
    theme_color:'#10243B',
    icons:[
      {src:'/icon.png',sizes:'512x512',type:'image/png'},
      {src:'/apple-icon.png',sizes:'180x180',type:'image/png'}
    ]
  };
}
