export type LocalizedReviewLang='de'|'fr'|'es'|'zh';

type Review={name:string;date:string;text:string};

export const apartmentReviewsLocalized:Record<LocalizedReviewLang,Record<'Rossi Apartment'|'Dimora Castelli',Review[]>>={
  de:{
    'Rossi Apartment':[
      {name:'Sarah',date:'2026',text:'Die Wohnung war geräumig, makellos sauber und sehr gut ausgestattet. Wir haben den abgeschlossenen Parkplatz und die Bushaltestelle nur wenige Gehminuten entfernt sehr geschätzt. Alessio und Chiara waren freundlich, herzlich und immer erreichbar.'},
      {name:'Giuseppe',date:'Juli 2025',text:'Wir hatten einen fantastischen Aufenthalt. Die Bushaltestelle nach Venedig und der Supermarkt liegen gleich um die Ecke. Die Wohnung bietet alles, was man braucht, und ist sehr gut ausgestattet.'},
      {name:'P (Som)',date:'Oktober 2025',text:'Eine schöne, geräumige Wohnung, besonders praktisch, wenn man mit dem Auto reist. Venedig war mit dem Bus sehr einfach zu erreichen. Chiara war sehr hilfsbereit und hat uns persönlich empfangen.'},
      {name:'Ana',date:'Juni 2026',text:'Die Gastfreundschaft und Herzlichkeit bei unserer Ankunft waren ein Höhepunkt unserer Reise. Die Unterkunft war perfekt und voller nützlicher Informationen für Besichtigungen. Wir würden ohne Zweifel wiederkommen.'},
      {name:'Summer',date:'April 2026',text:'Eine geräumige und komfortable Wohnung in Bahnhofsnähe. Wir bekamen viele Tipps dazu, wie man sich in Venedig bewegt, wo man essen kann und wie man Tickets kauft. Ich würde sie wieder wählen.'}
    ],
    'Dimora Castelli':[
      {name:'Semra',date:'März 2026',text:'Die Unterkunft war leicht zu erreichen und die Bushaltestelle liegt ganz in der Nähe. Das Zentrum von Venedig erreichten wir in etwa 15 Minuten. Wir fühlten uns wie zu Hause, und der Parkplatz direkt am Eingang war sehr praktisch.'},
      {name:'Marwa',date:'Januar 2026',text:'Venedig ist mit Bus und Bahn leicht erreichbar. Die Wohnung ist sauber und geräumig, und die Betten sind bequem. Der Empfang war herzlich, mit hilfreichen Informationen und kleinen Aufmerksamkeiten der Gastgeber.'},
      {name:'Lee',date:'April 2026',text:'Alessio und Chiara kennen Venedig sehr gut und gaben uns hilfreiche Tipps zur Orientierung. Die Wohnung ist sehr geräumig und sauber, mit Tee und Kaffee zum Frühstück und einem angenehmen Gartenbereich.'},
      {name:'Lynda',date:'2026',text:'Die Wohnung war sehr praktisch für die Fahrt mit dem Bus nach Venedig. Es war großartig, den Parkplatz direkt vor der Unterkunft zu haben. Bei unserer Ankunft lief die Klimaanlage bereits – eine sehr geschätzte Aufmerksamkeit.'},
      {name:'Katharina',date:'August 2025',text:'Wir waren zu viert mit einem kleinen Hund. Die Wohnung hatte alles, was wir brauchten, war renoviert und klimatisiert. Die Bushaltestelle nach Venedig ist in wenigen Minuten erreichbar. Wir würden wiederkommen.'}
    ]
  },
  fr:{
    'Rossi Apartment':[
      {name:'Sarah',date:'2026',text:'L’appartement était spacieux, impeccable et très bien équipé. Nous avons beaucoup apprécié le parking fermé et l’arrêt de bus à seulement quelques minutes à pied. Alessio et Chiara étaient chaleureux, accueillants et toujours disponibles.'},
      {name:'Giuseppe',date:'juillet 2025',text:'Nous avons passé un excellent séjour. L’arrêt de bus pour Venise et le supermarché sont juste à côté. L’appartement dispose de tout le nécessaire et est très bien équipé.'},
      {name:'P (Som)',date:'octobre 2025',text:'Un appartement charmant et spacieux, particulièrement pratique si vous voyagez en voiture. Rejoindre Venise en bus était très facile. Chiara s’est montrée très disponible et nous a accueillis en personne.'},
      {name:'Ana',date:'juin 2026',text:'L’hospitalité et la chaleur de l’accueil ont été un moment fort de notre voyage. Le logement était parfait et riche en informations utiles pour les visites. Nous y retournerions sans hésiter.'},
      {name:'Summer',date:'avril 2026',text:'Un appartement spacieux et confortable près de la gare. Nous avons reçu de nombreux conseils pour nous déplacer à Venise, savoir où manger et acheter les billets. Je le choisirais à nouveau.'}
    ],
    'Dimora Castelli':[
      {name:'Semra',date:'mars 2026',text:'La maison était facile à trouver et l’arrêt de bus est tout près. Nous avons rejoint le centre de Venise en environ 15 minutes. Nous nous sommes sentis comme chez nous et le parking juste devant l’entrée était très pratique.'},
      {name:'Marwa',date:'janvier 2026',text:'Venise est facilement accessible en bus et en train. L’appartement est propre, spacieux et les lits sont confortables. L’accueil était chaleureux, avec des informations utiles et de petites attentions de la part des hôtes.'},
      {name:'Lee',date:'avril 2026',text:'Alessio et Chiara connaissent très bien Venise et nous ont donné des conseils utiles pour nous orienter. L’appartement est très spacieux et propre, avec du thé et du café pour le petit-déjeuner et un agréable espace jardin.'},
      {name:'Lynda',date:'2026',text:'L’appartement était très pratique pour rejoindre Venise en bus. Avoir le parking juste devant le logement était vraiment appréciable. À notre arrivée, la climatisation était déjà allumée : une attention très agréable.'},
      {name:'Katharina',date:'août 2025',text:'Nous étions quatre avec un petit chien. L’appartement avait tout le nécessaire, était rénové et climatisé. L’arrêt de bus pour Venise se rejoint en quelques minutes. Nous reviendrions volontiers.'}
    ]
  },
  es:{
    'Rossi Apartment':[
      {name:'Sarah',date:'2026',text:'El apartamento era amplio, impecable y estaba muy bien equipado. Agradecimos mucho el aparcamiento cerrado y la parada de autobús a pocos minutos a pie. Alessio y Chiara fueron amables, acogedores y siempre disponibles.'},
      {name:'Giuseppe',date:'julio de 2025',text:'Tuvimos una estancia fantástica. La parada de autobús para Venecia y el supermercado están a la vuelta de la esquina. El apartamento tiene todo lo necesario y está muy bien equipado.'},
      {name:'P (Som)',date:'octubre de 2025',text:'Un apartamento precioso y espacioso, especialmente cómodo si viajas en coche. Llegar a Venecia en autobús fue muy fácil. Chiara fue muy atenta y nos recibió personalmente.'},
      {name:'Ana',date:'junio de 2026',text:'La hospitalidad y la calidez con la que nos recibieron fueron uno de los mejores momentos del viaje. El alojamiento era perfecto y estaba lleno de información útil para visitar la ciudad. Volveríamos sin dudarlo.'},
      {name:'Summer',date:'abril de 2026',text:'Un apartamento amplio y cómodo cerca de la estación. Recibimos muchos consejos sobre cómo movernos por Venecia, dónde comer y cómo comprar los billetes. Lo elegiría de nuevo.'}
    ],
    'Dimora Castelli':[
      {name:'Semra',date:'marzo de 2026',text:'Fue muy fácil llegar a la casa y la parada de autobús está muy cerca. Pudimos llegar al centro de Venecia en unos 15 minutos. Nos sentimos como en casa y el aparcamiento justo en la entrada fue muy cómodo.'},
      {name:'Marwa',date:'enero de 2026',text:'Venecia se alcanza fácilmente en autobús y tren. El apartamento está limpio, es amplio y las camas son cómodas. La bienvenida fue muy cálida, con información útil y pequeños detalles por parte de los anfitriones.'},
      {name:'Lee',date:'abril de 2026',text:'Alessio y Chiara conocen muy bien Venecia y nos dieron información muy útil para orientarnos. El apartamento es muy amplio y limpio, con té y café para el desayuno y una agradable zona de jardín.'},
      {name:'Lynda',date:'2026',text:'El apartamento era muy cómodo para llegar a Venecia en autobús. Fue estupendo tener el aparcamiento justo delante del alojamiento. Cuando llegamos, el aire acondicionado ya estaba encendido: un detalle que agradecimos mucho.'},
      {name:'Katharina',date:'agosto de 2025',text:'Éramos cuatro y viajábamos con un perro pequeño. El apartamento tenía todo lo necesario, estaba renovado y tenía aire acondicionado. La parada de autobús para Venecia está a pocos minutos. Volveríamos.'}
    ]
  },
  zh:{
    'Rossi Apartment':[
      {name:'Sarah',date:'2026年',text:'公寓宽敞、非常干净，而且设施齐全。我们很喜欢封闭式私人停车位，公交站步行几分钟就能到。Alessio 和 Chiara 热情友好，也一直都能及时提供帮助。'},
      {name:'Giuseppe',date:'2025年7月',text:'我们的住宿体验非常棒。前往威尼斯的公交站和超市就在附近，公寓设备齐全，日常所需一应俱全。'},
      {name:'P (Som)',date:'2025年10月',text:'公寓很漂亮也很宽敞，尤其适合自驾旅行。乘公交去威尼斯非常方便。Chiara 非常热心，并亲自迎接了我们。'},
      {name:'Ana',date:'2026年6月',text:'房东热情而温暖的接待是这次旅行中最难忘的部分之一。住宿非常舒适，也提供了很多游览景点所需的实用信息。我们一定愿意再次入住。'},
      {name:'Summer',date:'2026年4月',text:'公寓靠近车站，宽敞又舒适。我们得到了很多关于威尼斯交通、餐饮以及购票方式的建议。下次我还会选择这里。'}
    ],
    'Dimora Castelli':[
      {name:'Semra',date:'2026年3月',text:'公寓很好找，公交站也非常近。大约15分钟就能到威尼斯市中心。住在这里很有家的感觉，入口旁边的停车位尤其方便。'},
      {name:'Marwa',date:'2026年1月',text:'乘公交或火车前往威尼斯都很方便。公寓干净宽敞，床也很舒适。房东的接待很热情，还提供了很多实用信息和贴心小细节。'},
      {name:'Lee',date:'2026年4月',text:'Alessio 和 Chiara 非常熟悉威尼斯，给了我们很多实用的出行建议。公寓宽敞干净，还准备了早餐用的茶和咖啡，并有舒适的花园空间。'},
      {name:'Lynda',date:'2026年',text:'从公寓乘公交去威尼斯非常方便。停车位就在住宿门口，这一点特别实用。我们到达时空调已经提前打开，这个细节让人很贴心。'},
      {name:'Katharina',date:'2025年8月',text:'我们四个人带着一只小狗入住。公寓设施齐全、经过翻新并配有空调。前往威尼斯的公交站几分钟就能到。我们还会再来。'}
    ]
  }
};
