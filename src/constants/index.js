import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  crazyburgerImg,
  openclassrooms,
  devpoint,
  threejs,
  kaseikiumami,
  crazyburger,
  promptopia,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "works",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend React.js",
    icon: web,
  },
  {
    title: "Frontend React Native",
    icon: mobile,
  },
  {
    title: "Backend Node",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Developpeur Frontend",
    company_name: "DevPoint",
    icon: devpoint,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Avril 2023",
    points: [
      "Développement des features de présentation",
      "Création et mise en place d’un design système",
    ],
  },
  {
    title: "Developpeur React.js",
    company_name: "Crazee Burger",
    icon: crazyburgerImg,
    iconBg: "#383E56",
    date: "Sept 2022 - Aujourd'hui",
    points: [
      "Développement de nouvelles feature avec un focus sur l’UX",
      "Résolution de bugs via des outils de l’écosystème React",
      "Création et mise en place d’un design système",
      "Méthodologie Agile/SCRUM via un système de tickets",
      "Méthodologie Multi branche suivant le branching system GitHubFlow",
    ],
  },
  {
    title: "Developpeur Web",
    company_name: "Openclassrooms",
    icon: openclassrooms,
    iconBg: "#383E56",
    date: "Jan 2020 - Oct 2022",
    points: [
      "Création d’une base de donnée MongoDB exposée selon un protocole d’api REST.",
      "Contrôle d’identification, Cryptage des données sensible.",
      "Présentation démo devant un jury avec succès (obtention du diplôme)",
      "Stack technique : React, Redux, Axios, Express, API REST, MongoDB, Git, ",
      "P7: développer une application React avec MongoDB",
      "P6: Mise en place d’une API REST sécurisé",
      "P5: Construire un site e-commerce en javascript",
      "P4: Optimiser une page web existante (SEO - accessibilité)",
      "P3: Dynamiser une page web avec des animations CSS",
      "P2: Transformer une maquette en site web avec HTML et CSS",
      "P1: Prendre en main la formation Web",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Collaborer avec Stéphane est un réel plaisir. Non seulement il est un développeur React talentueux, mais il crée une ambiance agréable de travail. Son approche collaborative et son esprit d'équipe sont inestimables.",
    name: "Victor",
    designation: "Chef de projet",
    company: "Crazee Burger",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Je suis impressionné par le professionnalisme de Stéphane. Son expertise en développement React a permis de réaliser des interfaces utilisateur exceptionnelles pour mes projets.",
    name: "Maxime",
    designation: "Client",
    company: "DevPoint",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Stéphane est non seulement un développeur React talentueux, mais aussi une personne agréable avec qui travailler. Son approche collaborative et son esprit d'équipe sont vraiment appréciables.",
    name: "Loïs",
    designation: "Collègue",
    company: "Openclassrooms",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Crazee Burger",
    description:
      "Application de restauration rapide en ligne, permettant de commander et de se faire livrer des produits. Le mode administrateur permet de gérer les commandes et les produits dynamiquement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: crazyburger,
    source_code_link: "https://github.com/stephanemalho/crazy-burger",
    deployed_url: "https://crazy-burger-1kyyhlad1-stephanemalho.vercel.app/",
  },
  {
    name: "Promptopia",
    description:
      "Générer des prompts à conserver dans votre profil pour vous aider à écrire des histoires, des poèmes, des chansons, des scripts ou tout ce que vous pouvez imaginer. Une fois généré, copiez le prompt et utilisez le sur l'IA de votre choix!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next13",
        color: "green-text-gradient",
      },
      {
        name: "Talwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/stephanemalho/promptopia",
    deployed_url: "https://promptopia-livid.vercel.app/",
  },
  {
    name: "Kaseiki Umami",
    description:
      "une intégration captivante d'une page web statique et responsive pour un restaurant de sushi à la thématique japonaise. L'ajout d'animations AOS procure une expérience visuelle immersive.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "aos",
        color: "pink-text-gradient",
      },
    ],
    image: kaseikiumami,
    source_code_link: "https://github.com/stephanemalho/KaisekiUmami",
    deployed_url: "https://kaiseki-umami.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
