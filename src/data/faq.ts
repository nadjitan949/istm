export type FAQItem = {
  question: string;
  reponse: string;
};

export const faq: FAQItem[] = [
  {
    question: "Quels sont les documents requis pour l'inscription ?",
    reponse: "Vous devez fournir : une copie de votre dernier diplôme obtenu, vos relevés de notes, une pièce d'identité, deux photos d'identité, et un formulaire d'inscription rempli. Pour les inscriptions en Master, une lettre de motivation est également demandée.",
  },
  {
    question: "Puis-je m'inscrire en cours d'année ?",
    reponse: "Les inscriptions se font principalement avant la rentrée (juin à septembre). Certaines filières acceptent des inscriptions tardives sous réserve de places disponibles. Contactez le service des admissions pour connaître les possibilités.",
  },
  {
    question: "L'ISTM propose-t-il des facilités de paiement ?",
    reponse: "Oui, l'ISTM propose des échelonnements des frais de scolarité sur plusieurs mois. Les modalités sont à convenir avec le service comptable lors de votre inscription.",
  },
  {
    question: "Y a-t-il un internat ou une résidence étudiante ?",
    reponse: "L'ISTM ne dispose pas d'internat propre, mais nous avons des conventions avec des résidences étudiantes à proximité du campus. Le service de la vie scolaire peut vous orienter.",
  },
  {
    question: "Les stages sont-ils obligatoires ?",
    reponse: "Oui, des périodes de stage en entreprise sont prévues dans toutes les filières du supérieur (BTS, BT, Licence, Master) et sont obligatoires pour l'obtention du diplôme.",
  },
  {
    question: "Puis-je visiter le campus avant de m'inscrire ?",
    reponse: "Oui, nous organisons régulièrement des journées portes ouvertes. Vous pouvez également prendre rendez-vous avec le service des admissions pour une visite personnalisée du campus.",
  },
  {
    question: "Quelles séries au lycée sont acceptées pour les BTS ?",
    reponse: "Tous les BTS sont ouverts aux titulaires d'un baccalauréat, toutes séries confondues. Certains BTS techniques (Réseaux, Informatique) recommandent les séries scientifiques (C, D, G) mais restent accessibles à tous sur dossier.",
  },
  {
    question: "L'ISTM délivre-t-il des diplômes reconnus ?",
    reponse: "Oui, tous nos diplômes (BTS, BT, Licence, Master) sont reconnus par le ministère de l'Enseignement supérieur et préparent à l'insertion professionnelle ou à la poursuite d'études.",
  },
];