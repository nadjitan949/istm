export type Article = {
  slug: string;
  titre: string;
  resume: string;
  contenu: string;
  categorie: "actualite" | "evenement";
  date: string;
  image: string;
  auteur: string;
};

export const actualites: Article[] = [
  {
    slug: "rentree-scolaire-2026-2027",
    titre: "Rentrée scolaire 2026-2027 : inscriptions ouvertes",
    resume: "La campagne d'inscriptions pour l'année académique 2026-2027 est lancée. Découvrez les procédures et les dates clés pour chaque cycle.",
    contenu: "L'ISTM ouvre ses portes pour la nouvelle année académique 2026-2027. Du primaire au Master, toutes les filières accueillent de nouveaux étudiants. Les inscriptions se déroulent du 15 juin au 15 septembre 2026 sur le site et sur place. Une journée portes ouvertes est organisée le 5 juillet pour découvrir le campus et rencontrer l'équipe pédagogique.",
    categorie: "actualite",
    date: "15 juin 2026",
    image: "https://images.unsplash.com/photo-1541339907198-e08854caf25c?w=800&q=80",
    auteur: "Équipe communication ISTM",
  },
  {
    slug: "journees-portes-ouvertes",
    titre: "Journées portes ouvertes : samedi 5 juillet 2026",
    resume: "Venez visiter le campus de l'ISTM, rencontrer nos enseignants et découvrir nos filières lors de nos journées portes ouvertes.",
    contenu: "Le samedi 5 juillet 2026, l'ISTM ouvre ses portes au public de 9h à 16h. Au programme : visites guidées des infrastructures, présentations des filières BTS, BT, Licence et Master, témoignages d'étudiants et entretiens individuels avec l'équipe d'admissions. Entrée libre, inscription recommandée en ligne.",
    categorie: "evenement",
    date: "5 juillet 2026",
    image: "https://images.unsplash.com/photo-1544717297-fa652477776c?w=800&q=80",
    auteur: "Service admissions",
  },
  {
    slug: "nouveau-master-management",
    titre: "Ouverture d'un Master Management des Organisations",
    resume: "À la rentrée 2026, l'ISTM lance un nouveau Master professionnel en Management des Organisations pour former les cadres de demain.",
    contenu: "Fort de son réseau d'entreprises partenaires, l'ISTM propose à compter d'octobre 2026 un Master Management des Organisations. Cette formation de deux ans après Bac+3 prépare aux fonctions de direction, de conseil et de gestion de projet dans tous les secteurs d'activité. Admission sur dossier et entretien.",
    categorie: "actualite",
    date: "10 mai 2026",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53615658?w=800&q=80",
    auteur: "Direction pédagogique",
  },
  {
    slug: "resultats-bepc-bac-2026",
    titre: "Excellents résultats au BEPC et au Baccalauréat 2026",
    resume: "Nos élèves du secondaire ont obtenu un taux de réussite de 94% aux examens d'État 2026, parmi les meilleurs de la région.",
    contenu: "Félicitations à nos collégiens et lycéens ! Cette année, 94% de nos candidats ont réussi le BEPC ou le Baccalauréat, avec plusieurs mentions Très Bien. Ces résultats confirment la qualité de l'encadrement et du suivi pédagogique à l'ISTM.",
    categorie: "actualite",
    date: "20 juillet 2026",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    auteur: "Proviseur du secondaire",
  },
  {
    slug: "forum-metiers-2026",
    titre: "Forum des métiers : 12 entreprises rencontrent nos étudiants",
    resume: "Le forum annuel des métiers a réuni le 2 juin 2026 douze entreprises partenaires et plus de 300 étudiants de l'ISTM.",
    contenu: "Organisé par le service d'insertion professionnelle, le forum des métiers 2026 a permis à nos étudiants de BTS, Licence et Master d'échanger avec des recruteurs, de déposer des candidatures et de décrocher des stages. Plusieurs offres d'emploi ont été proposées sur place.",
    categorie: "evenement",
    date: "2 juin 2026",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    auteur: "Service insertion professionnelle",
  },
  {
    slug: "nouveau-laboratoire-informatique",
    titre: "Inauguration du nouveau laboratoire informatique",
    resume: "L'ISTM s'équipe d'un laboratoire informatique moderne avec 50 postes connectés, accessible à tous les étudiants.",
    contenu: "Doté de postes dernière génération, d'une connexion haut débit et de logiciels professionnels, le nouveau laboratoire informatique renforce l'apprentissage pratique en informatique de gestion, réseaux et comptabilité. Ouvert du lundi au samedi, il accueille également des sessions de certification.",
    categorie: "actualite",
    date: "1er avril 2026",
    image: "https://images.unsplash.com/photo-1555096047-022451f245c7?w=800&q=80",
    auteur: "Direction des infrastructures",
  },
];

export const evenements = actualites.filter((a) => a.categorie === "evenement");