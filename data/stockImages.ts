export type StockImageCreditKey='tourGuide'|'gondola'|'cycling'|'food'|'transfer'|'quietVenice';

export const stockImages={
  tourGuide:{
    src:'https://images.unsplash.com/photo-1639763703351-c27defbb51b1?auto=format&fit=crop&fm=jpg&q=82&w=1800',
    position:'center 46%',
    author:'Anna',
    source:'Unsplash',
    sourcePage:'https://unsplash.com/photos/n-XmZTFarck',
  },
  gondola:{
    src:'https://images.unsplash.com/photo-1768806874016-ac4d100b4d37?auto=format&fit=crop&fm=jpg&q=82&w=1800',
    position:'center 52%',
    author:'Fr. Daniel Ciucci',
    source:'Unsplash',
    sourcePage:'https://unsplash.com/photos/GKntcPQP5e0',
  },
  cycling:{
    src:'https://images.unsplash.com/photo-1761227130788-4566968aada7?auto=format&fit=crop&fm=jpg&q=82&w=1800',
    position:'center 58%',
    author:'kai muro',
    source:'Unsplash',
    sourcePage:'https://unsplash.com/photos/1KmbjtDQdDs',
  },
  food:{
    src:'https://images.unsplash.com/photo-1750701261255-87da8f30b3ce?auto=format&fit=crop&fm=jpg&q=82&w=1800',
    position:'center 60%',
    author:'Thibault Lam Tran',
    source:'Unsplash',
    sourcePage:'https://unsplash.com/photos/rKlfWtEaV2o',
  },
  transfer:{
    src:'https://images.unsplash.com/photo-1772465033877-8a570c8bf21d?auto=format&fit=crop&fm=jpg&q=82&w=1800',
    position:'center 54%',
    author:'Holiday Extras',
    source:'Unsplash',
    sourcePage:'https://unsplash.com/photos/vQZJ3NzhTM4',
  },
  quietVenice:{
    src:'https://images.unsplash.com/photo-1682698486211-6b582b549ba5?auto=format&fit=crop&fm=jpg&q=82&w=1800',
    position:'center 52%',
    author:'Sasha Matveeva',
    source:'Unsplash',
    sourcePage:'https://unsplash.com/photos/xgA3dlPZh7A',
  },
} as const;
