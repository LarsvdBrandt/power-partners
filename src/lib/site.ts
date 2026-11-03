export const site = {
  name: "PowerPartners",
  legalName: "Power Partners",
  url: "https://www.power-partners.nl",
  tagline: "Onafhankelijk advies voor uw energie",
  description:
    "PowerPartners in Valkenswaard: onafhankelijk energieadvies voor ondernemers. De scherpste energiecontracten via collectieve inkoop en persoonlijk advies op locatie, altijd vrijblijvend.",
  owner: "Toni Janssen",
  phone: "06-22353508",
  phoneHref: "tel:+31622353508",
  email: "Toni@power-partners.nl",
  emailHref: "mailto:Toni@power-partners.nl",
  whatsappHref: "https://api.whatsapp.com/send?phone=31622353508",
  linkedinHref: "https://linkedin.com/in/toni-janssen-981104136",
  address: {
    street: "Dommelseweg 110",
    postalCode: "5554 NV",
    city: "Valkenswaard",
    country: "Nederland",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Dommelseweg+110+5554NV+Valkenswaard",
} as const;

export const navigation = [
  { href: "/onze-diensten", label: "Diensten" },
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/klantverhalen", label: "Klantverhalen" },
  { href: "/veelgestelde-vragen", label: "Veelgestelde vragen" },
] as const;

export type Service = {
  title: string;
  description: string;
  image: string;
  icon: IconName;
};

export type IconName =
  | "scan"
  | "scale"
  | "building"
  | "shield"
  | "contract"
  | "target"
  | "subsidy"
  | "battery"
  | "heatpump"
  | "insulation";

export const highlights: Service[] = [
  {
    title: "Energie-scan op locatie",
    description:
      "We bekijken uw huidige verbruik en brengen de mogelijkheden voor kostenbesparing in kaart.",
    image: "/images/adviesgesprek.jpg",
    icon: "scan",
  },
  {
    title: "Onafhankelijk advies",
    description:
      "Een onafhankelijke vergelijking van energieleveranciers, zodat u zeker weet dat u de beste prijs heeft.",
    image: "/images/laptop-vergelijken.jpg",
    icon: "scale",
  },
  {
    title: "Zakelijk verduurzamen",
    description:
      "Voor bedrijven die hun energiekosten structureel willen verlagen.",
    image: "/images/dak-zonnepanelen.jpg",
    icon: "building",
  },
  {
    title: "Begeleiding",
    description:
      "Wij ontzorgen uw bedrijf volledig op het gebied van energie, van contract tot implementatie.",
    image: "/images/bedrijventerrein.jpg",
    icon: "shield",
  },
];

export const services: Service[] = [
  {
    title: "Energiecontracten",
    description:
      "Profiteer van de beste tarieven dankzij onze collectieve inkoop en ons uitgebreide netwerk van energieleveranciers. Vast of dynamisch: we zoeken wat bij u past.",
    image: "/images/besparen.jpg",
    icon: "contract",
  },
  {
    title: "Advies op maat",
    description:
      "Advies dat specifiek is afgestemd op de unieke situatie en doelen van uw onderneming.",
    image: "/images/advies-op-maat.jpg",
    icon: "target",
  },
  {
    title: "Subsidie",
    description:
      "Voor veel duurzame oplossingen kunt u subsidie krijgen. Dit regelen we in samenwerking met Onno van Regenesys.",
    image: "/images/keuze.jpg",
    icon: "subsidy",
  },
  {
    title: "Batterijen",
    description:
      "Sla overtollige energie op en verminder pieken in uw stroomverbruik met efficiënte batterijopslag.",
    image: "/images/industrie.jpg",
    icon: "battery",
  },
  {
    title: "Warmtepompen",
    description:
      "Verwarm en koel uw bedrijfspand duurzaam en kosteneffectief met geavanceerde warmtepompsystemen.",
    image: "/images/warmtepomp.jpg",
    icon: "heatpump",
  },
  {
    title: "Isolatie",
    description:
      "Verbeter de energie-efficiëntie van uw bedrijfspand aanzienlijk met professionele isolatieoplossingen.",
    image: "/images/isolatie.jpg",
    icon: "insulation",
  },
];

export const processSteps = [
  {
    title: "Telefonisch kennismaken",
    description:
      "Na uw aanvraag volgt eerst een korte kennismaking per telefoon.",
  },
  {
    title: "Afspraak op locatie",
    description:
      "We plannen een vrijblijvende afspraak in op uw bedrijfslocatie.",
  },
  {
    title: "Mogelijkheden bespreken",
    description:
      "Samen bekijken we de opties voor een beter energiecontract en, indien gewenst, verduurzaming.",
  },
  {
    title: "Offerte op maat",
    description:
      "U ontvangt een vrijblijvende offerte met de beste opties. U beslist.",
  },
];

export const workSteps = [
  {
    title: "Persoonlijke kennismaking en behoefteanalyse",
    description:
      "Elke succesvolle samenwerking begint met een goed gesprek. Tijdens de kennismaking bespreken we uw huidige energieverbruik en toekomstige behoeften. We luisteren goed, zodat we een helder beeld krijgen van uw situatie en de basis leggen voor advies op maat.",
    image: "/images/overleg.jpg",
  },
  {
    title: "Zoektocht naar de ideale oplossing",
    description:
      "Op basis van uw energiebehoefte gaan we proactief op zoek naar de beste contracten en duurzame oplossingen. Als onafhankelijk adviseur presenteren we u een selectie van opties, volledig vrijblijvend. U houdt altijd de vrijheid om te kiezen wat het beste bij u past.",
    image: "/images/advies-tablet.jpg",
  },
  {
    title: "Volledige ontzorging en begeleiding",
    description:
      "Van besluitvorming tot implementatie ontzorgen we u volledig. Met vragen over energie kunt u altijd kosteloos bij ons terecht. Wij zorgen dat het hele proces soepel verloopt, zodat u zorgeloos kunt genieten van uw nieuwe energieoplossing.",
    image: "/images/zonnepanelen-inspectie.jpg",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  company?: string;
};

export const featuredTestimonials: Testimonial[] = [
  {
    quote:
      "Fijne gast. Altijd snel en duidelijke communicatie. Neemt zelfs in zijn vakantie de telefoon op.",
    name: "Dennis",
    company: "Nederland Slaapcentrum",
  },
  {
    quote:
      "Zeer deskundig geholpen met de energie-inkoop. Helder advies en een scherpe deal gerealiseerd. Zeker een aanrader.",
    name: "Marcel",
    company: "Ebike Gallery",
  },
  {
    quote:
      "De energie-inkoop uit handen geven bleek een slimme keuze. Transparant advies en een mooi inkoopresultaat.",
    name: "Guus",
    company: "Vruchtboomkwekerij van Montfort",
  },
];

export const moreTestimonials: Testimonial[] = [
  {
    quote:
      "De persoonlijke aanpak van PowerPartners heeft me enorm geholpen. Geen gedoe met klantenservices, maar direct contact en de beste deal voor mijn bedrijf.",
    name: "Marcel Foederer",
    company: "Ebike Gallery, Heeze",
  },
  {
    quote:
      "Wat PowerPartners echt onderscheidt, is de persoonlijke aanpak. Ik voel me geen nummer, maar een gewaardeerde klant. Ze gaan verder waar anderen stoppen.",
    name: "Gaby",
    company: "Kinderdagverblijf Dikkie & Dik",
  },
  {
    quote:
      "Door de hulp van PowerPartners heb ik flink kunnen besparen op de energiekosten voor al mijn vestigingen. De collectieve inkoop was een perfecte oplossing voor mijn bedrijf.",
    name: "Tevreden ondernemer",
    company: "Meerdere vestigingen",
  },
  {
    quote:
      "Ik zat vast aan een ongunstig energiecontract via een andere partij. PowerPartners heeft me geholpen om daaruit te komen en een veel betere deal te krijgen. Echt een verademing!",
    name: "Ondernemer",
    company: "Complexe contractsituatie",
  },
  {
    quote:
      "Wat ik het meest waardeer is het persoonlijke contact en de korte lijntjes. Ik kan altijd bellen met mijn vragen en krijg direct een duidelijk antwoord.",
    name: "Klant van PowerPartners",
  },
];

export const faqs = [
  {
    question:
      "Is het advies gratis en hoe werkt de rol van PowerPartners als tussenpersoon?",
    answer:
      "Ja, ons advies is volledig gratis en vrijblijvend. PowerPartners treedt op als uw onafhankelijke tussenpersoon. Wij zoeken de beste energieoplossingen die aansluiten bij uw wensen en behoeften. U profiteert van onze expertise en de beste deals, zonder dat u daarvoor betaalt.",
  },
  {
    question: "Moet ik zelf nog veel regelen na het advies?",
    answer:
      "Nee, u hoeft zich nergens zorgen over te maken. PowerPartners ontzorgt u volledig, van het vinden van de beste oplossing tot en met de implementatie. We begeleiden u stap voor stap, zodat u zich kunt richten op wat echt belangrijk is.",
  },
  {
    question: "Welke duurzame energieoplossingen bieden jullie aan?",
    answer:
      "Wij bieden een breed scala aan duurzame oplossingen, afgestemd op uw situatie. Denk aan zonnepanelen, batterijopslag, warmtepompen en isolatieadvies. Samen kijken we naar de meest rendabele en duurzame opties voor uw bedrijf.",
  },
  {
    question: "Hoe begin ik met een vrijblijvend adviesgesprek?",
    answer: `U kunt eenvoudig contact opnemen via ${site.phone} of een e-mail sturen naar ${site.email}. We plannen dan een persoonlijk gesprek bij u op kantoor of op de zaak om uw wensen te bespreken en een advies op maat te maken.`,
  },
  {
    question: "Hoe onafhankelijk is PowerPartners in het adviesproces?",
    answer:
      "PowerPartners is volledig onafhankelijk. We werken niet voor specifieke leveranciers, maar zoeken altijd naar de beste oplossing voor uw unieke situatie. Uw belangen staan voorop en u houdt altijd de eindbeslissing.",
  },
  {
    question:
      "Wat is de gemiddelde terugverdientijd van duurzame energie-investeringen?",
    answer:
      "De terugverdientijd verschilt per oplossing en situatie, maar duurzame investeringen zijn vaak zeer rendabel. Tijdens het adviesgesprek krijgt u een gedetailleerde berekening van de verwachte terugverdientijd en de financiële voordelen op lange termijn.",
  },
  {
    question: "Zijn er subsidies beschikbaar voor duurzame energie?",
    answer:
      "Ja, er zijn vaak diverse landelijke en gemeentelijke subsidies beschikbaar. We informeren u graag over de mogelijkheden en helpen bij de aanvraag, in samenwerking met Onno van Regenesys, zodat u maximaal profiteert.",
  },
  {
    question: "Waarom zou ik kiezen voor PowerPartners?",
    answer:
      "Kiezen voor PowerPartners betekent kiezen voor persoonlijk contact, onafhankelijk advies en een partner die altijd de beste oplossing zoekt. We ontzorgen u volledig en zorgen dat uw overstap soepel en succesvol verloopt.",
  },
];
