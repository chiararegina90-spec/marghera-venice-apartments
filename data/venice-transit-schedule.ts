export type VeniceTransitLang='de'|'fr'|'es'|'zh';

export const veniceTransitSchedule:Record<VeniceTransitLang,[string,string,string,string][]>={
  de:[
    ['Tagsüber','6 · 6L','Alle 10 Minuten','Marghera → Piazzale Roma'],
    ['Abends','6','Alle 20 Minuten','Marghera → Piazzale Roma'],
    ['Nachts','N2','Alle 30 Minuten','Venedig → Marghera'],
    ['Mit dem Zug','Mestre → Santa Lucia','Häufige Regionalzüge','']
  ],
  fr:[
    ['En journée','6 · 6L','Toutes les 10 minutes','Marghera → Piazzale Roma'],
    ['Le soir','6','Toutes les 20 minutes','Marghera → Piazzale Roma'],
    ['La nuit','N2','Toutes les 30 minutes','Venise → Marghera'],
    ['En train','Mestre → Santa Lucia','Trains régionaux fréquents','']
  ],
  es:[
    ['De día','6 · 6L','Cada 10 minutos','Marghera → Piazzale Roma'],
    ['Por la tarde','6','Cada 20 minutos','Marghera → Piazzale Roma'],
    ['De noche','N2','Cada 30 minutos','Venecia → Marghera'],
    ['En tren','Mestre → Santa Lucia','Trenes regionales frecuentes','']
  ],
  zh:[
    ['白天','6 · 6L','每10分钟一班','Marghera → Piazzale Roma'],
    ['晚间','6','每20分钟一班','Marghera → Piazzale Roma'],
    ['夜间','N2','每30分钟一班','威尼斯 → Marghera'],
    ['火车','Mestre → Santa Lucia','区域列车班次频繁','']
  ]
};
