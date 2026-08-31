export const navigation = [
  ["Home", "#top"],
  ["Le nostre case", "#case"],
  ["Scopri Venezia", "#ispirazione"],
  ["Scopri il Veneto", "#mappa"],
  ["Esperienze", "#ispirazione"],
  ["Journal", "#journal"],
  ["FAQ", "#faq"],
  ["Pet & Family", "#pet-family"],
  ["Contatti", "#contatti"],
] as const;

export const strengths = [
  {
    icon: "P",
    title: "Parcheggio privato",
    text: "Lascia l’auto in un posto riservato e visita Venezia senza stress.",
  },
  {
    icon: "24",
    title: "Venezia H24",
    text: "Collegamenti diurni e notturni per vivere la città e rientrare quando vuoi.",
  },
  {
    icon: "Pet",
    title: "Pet Friendly",
    text: "Cuccia e ciotole disponibili per il tuo compagno di viaggio.",
  },
  {
    icon: "Baby",
    title: "Family Friendly",
    text: "Culla o lettino con biancheria, gratuitamente su richiesta.",
  },
] as const;

export const properties = [
  {
    name: "Rossi Apartment",
    guests: "Fino a 7 ospiti",
    text: "Spazi ampi, cucina abitabile, grande soggiorno e terrazza: ideale per famiglie e gruppi.",
    image: "/images/rossi-hero.webp",
    cin: "IT027042C2EDHHAM7Z",
  },
  {
    name: "Dimora Castelli",
    guests: "Fino a 5 ospiti",
    text: "Una casa raccolta e curata, perfetta per coppie, famiglie e piccoli gruppi.",
    image: "/images/castelli-hero.webp",
    cin: "IT027042C2YOUCUFM2",
  },
] as const;
