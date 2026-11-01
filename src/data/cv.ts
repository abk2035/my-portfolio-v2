import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

export type Experience = {
  date: L<string>;
  role: L<string>;
  org: L<string>;
  points: L<string[]>;
};

export type Education = {
  date: string;
  title: L<string>;
  school: L<string>;
};

const DOUALA: L<string> = { fr: "Douala, Cameroun", en: "Douala, Cameroon" };
const ENSPD: L<string> = {
  fr: "École Nationale Supérieure Polytechnique de Douala (ENSPD)",
  en: "National Advanced School of Engineering of Douala (ENSPD)",
};

export const experience: Experience[] = [
  {
    date: { fr: "Décembre 2025 – Présent", en: "December 2025 – Present" },
    role: { fr: "Ingénieur de Logiciel", en: "Software Engineer" },
    org: { fr: "Sorawel · Douala, Cameroun", en: "Sorawel · Douala, Cameroon" },
    points: {
      fr: ["Intégration, configuration et déploiement du système ERP Odoo adapté aux besoins métier de l'entreprise."],
      en: ["Integration, configuration and deployment of the Odoo ERP system tailored to the company's business needs."],
    },
  },
  {
    date: { fr: "Décembre 2025", en: "December 2025" },
    role: { fr: "Formateur en Développement Web", en: "Web Development Trainer" },
    org: { fr: "PADESCE-WESCO · Douala, Cameroun", en: "PADESCE-WESCO · Douala, Cameroon" },
    points: {
      fr: [
        "Enseignement du cycle complet de développement logiciel, de la phase de conception théorique jusqu'à la mise en production.",
        "Animation d'ateliers pratiques axés sur les technologies web fondamentales : HTML5, CSS3, JavaScript et PHP.",
      ],
      en: [
        "Taught the full software development cycle, from theoretical design to production.",
        "Ran hands-on workshops on core web technologies: HTML5, CSS3, JavaScript and PHP.",
      ],
    },
  },
  {
    date: { fr: "Août 2023 – 2025", en: "August 2023 – 2025" },
    role: { fr: "Développeur Web & Mobile Indépendant (Freelance)", en: "Freelance Web & Mobile Developer" },
    org: DOUALA,
    points: {
      fr: [
        "Conception et déploiement d'une plateforme SaaS d'analyse et de gestion de l'énergie (Django, Vue.js).",
        "Étude d'architecture et développement d'une plateforme de recherche d'emploi (Node.js, React.js).",
        "Conception, analyse et implémentation d'une plateforme de paiement sécurisée en Java.",
      ],
      en: [
        "Design and deployment of a SaaS platform for energy analysis and management (Django, Vue.js).",
        "Architecture study and development of a job search platform (Node.js, React.js).",
        "Design, analysis and implementation of a secure payment platform in Java.",
      ],
    },
  },
  {
    date: { fr: "Novembre 2023 – Août 2024", en: "November 2023 – August 2024" },
    role: { fr: "Développeur Web et Mobile & Support IT", en: "Web & Mobile Developer & IT Support" },
    org: {
      fr: "Kamer Engineering Solutions SARL · Douala, Cameroun",
      en: "Kamer Engineering Solutions SARL · Douala, Cameroon",
    },
    points: {
      fr: [
        "Développement de l'application mobile RELEC_CUD destinée à la gestion de l'éclairage public pour la Communauté Urbaine de Douala (CUD).",
        "Conception d'une application mobile d'inspection de levage et d'une plateforme d'impression/génération d'étiquettes avec QR Code.",
        "Traitement et analyse de données techniques à l'aide de scripts Python et d'Excel.",
        "Assistance technique, maintenance et support informatique d'entreprise.",
      ],
      en: [
        "Development of RELEC_CUD, the mobile app for managing public lighting for the Douala Urban Community (CUD).",
        "Design of a lifting inspection mobile app and a label printing/generation platform with QR codes.",
        "Processing and analysis of technical data with Python scripts and Excel.",
        "Technical assistance, maintenance and corporate IT support.",
      ],
    },
  },
  {
    date: { fr: "Février 2023 – Juin 2023", en: "February 2023 – June 2023" },
    role: { fr: "Stagiaire Développeur Logiciel", en: "Software Developer Intern" },
    org: { fr: "Spacekola · Douala, Cameroun", en: "Spacekola · Douala, Cameroon" },
    points: {
      fr: [
        "Développement d'une plateforme SaaS de gestion intégrée pour les officines de pharmacie.",
        "Refactorisation et modernisation du code de l'outil Toolrad en utilisant Vuetify.",
        "Modélisation et conception d'un entrepôt de données (Data Warehouse) sous Talend Open Studio.",
      ],
      en: [
        "Development of an integrated management SaaS platform for pharmacies.",
        "Refactoring and modernization of the Toolrad tool's code using Vuetify.",
        "Modeling and design of a data warehouse with Talend Open Studio.",
      ],
    },
  },
  {
    date: { fr: "Novembre 2022", en: "November 2022" },
    role: {
      fr: "Annotateur & Étiqueteur de Données (temps partiel)",
      en: "Data Annotator & Labeler (part-time)",
    },
    org: { fr: "Clickworker / UHRS", en: "Clickworker / UHRS" },
    points: {
      fr: ["Annotation et étiquetage de jeux de données pour l'entraînement de modèles d'IA (plateformes Google, Meta, etc.)."],
      en: ["Annotation and labeling of datasets for AI model training (Google, Meta platforms, etc.)."],
    },
  },
  {
    date: { fr: "Juin 2022 – Août 2022", en: "June 2022 – August 2022" },
    role: { fr: "Stagiaire Développeur Web", en: "Web Developer Intern" },
    org: ENSPD,
    points: {
      fr: [
        "Conception de la plateforme web d'inscription des étudiants de l'ENSPD.",
        "Création d'un système de génération et de vérification de QR Code pour la sécurisation des diplômes d'étudiants.",
      ],
      en: [
        "Design of the ENSPD student enrollment web platform.",
        "Creation of a QR code generation and verification system to secure student diplomas.",
      ],
    },
  },
  {
    date: { fr: "Juin 2021 – Août 2021", en: "June 2021 – August 2021" },
    role: { fr: "Stagiaire Informatique & Réseaux", en: "IT & Networks Intern" },
    org: { fr: "Green Consulting SARL · Douala, Cameroun", en: "Green Consulting SARL · Douala, Cameroon" },
    points: {
      fr: [
        "Conception du site web vitrine de l'entreprise et proposition d'une architecture réseau optimisée.",
        "Gestion et optimisation de la visibilité numérique sur la page Facebook de l'entreprise.",
      ],
      en: [
        "Design of the company's showcase website and proposal of an optimized network architecture.",
        "Management and optimization of the company's visibility on its Facebook page.",
      ],
    },
  },
];

const ENSPD_DOUALA: L<string> = {
  fr: `${ENSPD.fr} · Douala, Cameroun`,
  en: `${ENSPD.en} · Douala, Cameroon`,
};

export const education: Education[] = [
  {
    date: "2022 – 2023",
    title: { fr: "Diplôme d'Ingénieur de Conception en Génie Informatique", en: "Design Engineering Degree in Computer Engineering" },
    school: ENSPD_DOUALA,
  },
  {
    date: "2020 – 2021",
    title: { fr: "Diplôme d'Ingénieur des Travaux en Génie Informatique", en: "Technical Engineering Degree in Computer Engineering" },
    school: ENSPD_DOUALA,
  },
  {
    date: "2016 – 2017",
    title: { fr: "Baccalauréat Scientifique (Série C)", en: "Scientific Baccalaureate (Series C)" },
    school: {
      fr: "Lycée Classique de Bafoussam · Bafoussam, Cameroun",
      en: "Lycée Classique de Bafoussam · Bafoussam, Cameroon",
    },
  },
];
