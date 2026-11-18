export type Semestre = {
  numero: number;
  modules: string[];
};

export type Filiere = {
  id: string;
  slug: string;
  diplome: "BTS" | "BT" | "Licence" | "Master";
  nom: string;
  description: string;
  duree: string;
  conditions: string[];
  programme: Semestre[];
  competences: string[];
  debouches: string[];
  image: string;
};

export const filieres: Filiere[] = [
  {
    id: "info-gestion",
    slug: "informatique-gestion",
    diplome: "BTS",
    nom: "Informatique de Gestion",
    description: "Formation aux métiers du développement d'applications de gestion, des bases de données et des systèmes d'information pour entreprises.",
    duree: "2 ans (4 semestres)",
    conditions: ["Baccalauréat (toutes séries)", "Dossier scolaire", "Entretien de motivation"],
    programme: [
      { numero: 1, modules: ["Algorithmique", "Bureautique avancée", "Mathématiques appliquées", "Anglais des affaires"] },
      { numero: 2, modules: ["Programmation (Python/Java)", "Bases de données I", "Comptabilité générale", "Communication"] },
      { numero: 3, modules: ["Développement Web", "Bases de données II", "Systèmes d'information", "Gestion de projet"] },
      { numero: 4, modules: ["Frameworks modernes", "Sécurité informatique", "Audit des SI", "Stage en entreprise"] },
    ],
    competences: ["Développer des applications de gestion", "Administrer des bases de données", "Concevoir des sites web dynamiques", "Assister à la transformation numérique"],
    debouches: ["Développeur d'applications de gestion", "Administrateur de bases de données", "Technicien support informatique", "Consultant SI junior"],
    image: "https://images.unsplash.com/photo-1555096047-022451f245c7?w=800&q=80",
  },
  {
    id: "reseaux-telecoms",
    slug: "reseaux-telecoms",
    diplome: "BTS",
    nom: "Réseaux et Télécommunications",
    description: "Formation à l'installation, la configuration et la maintenance des réseaux informatiques et des infrastructures de télécommunications.",
    duree: "2 ans (4 semestres)",
    conditions: ["Baccalauréat (séries C, D, G ou équivalent)", "Dossier scolaire", "Entretien de motivation"],
    programme: [
      { numero: 1, modules: ["Réseaux locaux (LAN)", "Matériel informatique", "Systèmes d'exploitation", "Anglais technique"] },
      { numero: 2, modules: ["Routage et commutation", "Téléphonie IP", "Sécurité des réseaux", "Mathématiques pour réseaux"] },
      { numero: 3, modules: ["Administration réseau", "Serveurs Windows/Linux", "VoIP et visioconférence", "Gestion de projet"] },
      { numero: 4, modules: ["Réseaux sans fil", "Sécurité avancée", "Supervision réseau", "Stage en entreprise"] },
    ],
    competences: ["Installer et configurer des réseaux", "Administrer des serveurs", "Assurer la sécurité des infrastructures", "Dépaner les pannes réseau"],
    debouches: ["Administrateur réseau", "Technicien télécoms", "Ingénieur support réseau", "Responsable infrastructure"],
    image: "https://images.unsplash.com/photo-1544244014-6d647b02701e?w=800&q=80",
  },
  {
    id: "compta-gestion",
    slug: "comptabilite-gestion-financiere",
    diplome: "BTS",
    nom: "Comptabilité et Gestion Financière",
    description: "Formation aux métiers de la comptabilité, de la gestion financière et du contrôle de gestion pour entreprises et cabinets comptables.",
    duree: "2 ans (4 semestres)",
    conditions: ["Baccalauréat (toutes séries)", "Dossier scolaire", "Entretien de motivation"],
    programme: [
      { numero: 1, modules: ["Comptabilité générale I", "Mathématiques financières", "Droit des affaires", "Informatique de gestion"] },
      { numero: 2, modules: ["Comptabilité générale II", "Analyse financière", "Fiscalité des entreprises", "Anglais des affaires"] },
      { numero: 3, modules: ["Comptabilité analytique", "Contrôle de gestion", "Gestion budgétaire", "Audit interne"] },
      { numero: 4, modules: ["Consolidation des comptes", "Gestion de trésorerie", "Logiciels comptables", "Stage en entreprise"] },
    ],
    competences: ["Tenir la comptabilité d'une entreprise", "Élaborer des états financiers", "Assurer la gestion budgétaire", "Préparer les déclarations fiscales"],
    debouches: ["Comptable", "Contrôleur de gestion", "Assistant comptable", "Gestionnaire de paie"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    id: "banque-finance",
    slug: "banque-finance",
    diplome: "BTS",
    nom: "Banque et Finance",
    description: "Formation aux métiers bancaires et financiers : gestion de clientèle, opérations de banque, produits financiers et gestion de portefeuille.",
    duree: "2 ans (4 semestres)",
    conditions: ["Baccalauréat (toutes séries)", "Dossier scolaire", "Entretien de motivation"],
    programme: [
      { numero: 1, modules: ["Principes de banque", "Mathématiques financières", "Économie monétaire", "Informatique de gestion"] },
      { numero: 2, modules: ["Opérations de banque", "Crédits et épargne", "Droit bancaire", "Relation client"] },
      { numero: 3, modules: ["Marchés financiers", "Produits d'épargne", "Gestion de risque", "Assurance"] },
      { numero: 4, modules: ["Finance d'entreprise", "Audit bancaire", "Conformité réglementaire", "Stage en entreprise"] },
    ],
    competences: ["Gérer un portefeuille clients", "Conseiller sur les produits bancaires", "Analyser les risques financiers", "Assurer le suivi des opérations"],
    debouches: ["Conseiller clientèle", "Gestionnaire de compte", "Analyste de crédit", "Assistant de gestion de patrimoine"],
    image: "https://images.unsplash.com/photo-1556740738-9a60f5b08e17?w=800&q=80",
  },
  {
    id: "marketing-communication",
    slug: "marketing-communication",
    diplome: "Licence",
    nom: "Marketing et Communication",
    description: "Formation aux stratégies marketing, à la communication d'entreprise, à la publicité et à la gestion de marque.",
    duree: "3 ans (6 semestres)",
    conditions: ["Baccalauréat (toutes séries)", "Dossier scolaire", "Entretien de motivation"],
    programme: [
      { numero: 1, modules: ["Fondamentaux du marketing", "Communication orale et écrite", "Informatique de gestion", "Anglais"] },
      { numero: 2, modules: ["Comportement du consommateur", "Écriture publicitaire", "Droit de la communication", "Graphisme"] },
      { numero: 3, modules: ["Marketing opérationnel", "Communication digitale", "Études de marché", "Gestion de projet"] },
      { numero: 4, modules: ["Marque et identité", "Relations publiques", "Événementiel", "Webmarketing"] },
      { numero: 5, modules: ["Stratégie marketing", "Gestion de la relation client", "International business", "Analyse de données"] },
      { numero: 6, modules: ["Campagne intégrée", "Mémoire professionnel", "Stage longue durée", "Soutenance"] },
    ],
    competences: ["Élaborer des stratégies marketing", "Concevoir des campagnes de communication", "Gérer les réseaux sociaux d'entreprise", "Animer des relations presse"],
    debouches: ["Chef de produit", "Responsable communication", "Chargé de marketing digital", "Attaché de presse"],
    image: "https://images.unsplash.com/photo-1556740738-9a60f5b08e17?w=800&q=80",
  },
  {
    id: "rh",
    slug: "gestion-ressources-humaines",
    diplome: "Licence",
    nom: "Gestion des Ressources Humaines",
    description: "Formation aux métiers du recrutement, de la gestion des carrières, de la paie et du développement des compétences en entreprise.",
    duree: "3 ans (6 semestres)",
    conditions: ["Baccalauréat (toutes séries)", "Dossier scolaire", "Entretien de motivation"],
    programme: [
      { numero: 1, modules: ["Fondamentaux des RH", "Droit du travail", "Psychologie organisationnelle", "Informatique de gestion"] },
      { numero: 2, modules: ["Recrutement et sélection", "Gestion de la paie", "Formation des adultes", "Anglais des affaires"] },
      { numero: 3, modules: ["Gestion des carrières", "Évaluation du personnel", "Climat social", "Négociation collective"] },
      { numero: 4, modules: ["Développement des compétences", "Santé et sécurité au travail", "SIRH", "Gestion de projet RH"] },
      { numero: 5, modules: ["Stratégie RH", "Gestion des talents", "Diversité et inclusion", "Audit social"] },
      { numero: 6, modules: ["Mémoire professionnel", "Stage longue durée", "Soutenance", "Certification"] },
    ],
    competences: ["Recruter et intégrer des collaborateurs", "Gérer l'administration du personnel", "Conduire des entretiens d'évaluation", "Développer un plan de formation"],
    debouches: ["Chargé de recrutement", "Responsable RH", "Gestionnaire de paie", "Conseiller en formation"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    id: "logistique-transport",
    slug: "logistique-transport",
    diplome: "Licence",
    nom: "Logistique et Transport",
    description: "Formation à la gestion des flux physiques et d'information, à l'organisation du transport et à l'optimisation de la chaîne logistique.",
    duree: "3 ans (6 semestres)",
    conditions: ["Baccalauréat (toutes séries)", "Dossier scolaire", "Entretien de motivation"],
    programme: [
      { numero: 1, modules: ["Fondamentaux de la logistique", "Gestion des stocks", "Transport terrestre", "Informatique de gestion"] },
      { numero: 2, modules: ["Entreposage et magasinage", "Transport international", "Douane et réglementation", "Anglais logistique"] },
      { numero: 3, modules: ["Chaîne d'approvisionnement", "Planification des transports", "Gestion d'entrepôt", "Sécurité des marchandises"] },
      { numero: 4, modules: ["Optimisation des flux", "Technologies logistiques", "Gestion de la demande", "Gestion de projet"] },
      { numero: 5, modules: ["Stratégie logistique", "Transport multimodal", "Gestion des retours", "Indicateurs de performance"] },
      { numero: 6, modules: ["Mémoire professionnel", "Stage longue durée", "Soutenance", "Certification"] },
    ],
    competences: ["Organiser le transport de marchandises", "Gérer des entrepôts et stocks", "Optimiser la chaîne d'approvisionnement", "Coordonner les flux logistiques"],
    debouches: ["Responsable logistique", "Gestionnaire de stock", "Affréteur", "Responsable supply chain"],
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80",
  },
  {
    id: "secretaire-direction",
    slug: "secretariat-direction",
    diplome: "BT",
    nom: "Secrétariat de Direction",
    description: "Formation au secrétariat de direction, à l'assistanat de gestion et à l'organisation administrative pour cadres et dirigeants.",
    duree: "2 ans (4 semestres)",
    conditions: ["Baccalauréat (toutes séries)", "Dossier scolaire", "Entretien de motivation"],
    programme: [
      { numero: 1, modules: ["Techniques de secrétariat", "Traitement de texte", "Anglais des affaires", "Communication professionnelle"] },
      { numero: 2, modules: ["Comptabilité simplifiée", "Gestion d'agenda", "Droit administratif", "Technologies de l'information"] },
      { numero: 3, modules: ["Assistanat de direction", "Organisation d'événements", "Gestion documentaire", "Anglais avancé"] },
      { numero: 4, modules: ["Gestion de bureau", "Relations avec les partenaires", "Stage en entreprise", "Soutenance"] },
    ],
    competences: ["Assister un dirigeant au quotidien", "Gérer l'agenda et les déplacements", "Rédiger des documents professionnels", "Organiser des réunions et événements"],
    debouches: ["Secrétaire de direction", "Assistante de direction", "Office manager", "Assistante administrative"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    id: "master-management",
    slug: "management-organisation",
    diplome: "Master",
    nom: "Management des Organisations",
    description: "Formation de cadres capables de diriger des organisations, de piloter la stratégie et de gérer des équipes dans un environnement complexe.",
    duree: "2 ans (4 semestres) après Bac+3",
    conditions: ["Licence ou équivalent (Bac+3)", "Dossier académique", "Entretien de motivation", "Niveau anglais B2"],
    programme: [
      { numero: 1, modules: ["Stratégie d'entreprise", "Leadership", "Gestion du changement", "Économie internationale"] },
      { numero: 2, modules: ["Gestion de projet", "Finance pour managers", "Marketing stratégique", "Management interculturel"] },
      { numero: 3, modules: ["Gestion des opérations", "RSE et éthique", "Négociation avancée", "Transformation digitale"] },
      { numero: 4, modules: ["Mémoire de Master", "Stage de fin d'études", "Soutenance", "Certification"] },
    ],
    competences: ["Diriger une organisation ou un département", "Élaborer et piloter la stratégie", "Manager des équipes pluridisciplinaires", "Conduire le changement organisationnel"],
    debouches: ["Directeur d'entreprise", "Responsable de département", "Consultant en management", "Chef de projet senior"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53615658?w=800&q=80",
  },
];

function normalizeDiplome(diplome: string) {
  return diplome.trim().toLowerCase();
}

export function getFiliereBySlug(diplome: string, slug: string): Filiere | undefined {
  const normalizedDiplome = normalizeDiplome(diplome);

  return filieres.find(
    (f) => normalizeDiplome(f.diplome) === normalizedDiplome && f.slug === slug
  );
}

export function getFilieresByDiplome(diplome: string): Filiere[] {
  const normalizedDiplome = normalizeDiplome(diplome);

  return filieres.filter((f) => normalizeDiplome(f.diplome) === normalizedDiplome);
}