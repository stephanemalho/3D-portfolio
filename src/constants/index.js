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
  freelance,
  devpoint,
  threejs,
  kaseikiumami,
  crazyburger,
  carsearch,
  promptopia,
  copy,
  copied,
  valleesud,
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

const socialLinks = [
  { 
    id:"1",
    name: "Email",
    title: "stephane.malho@gmail.com",
    copy,
    copied,
  },
  {
    id:"2",
    name: "Téléphone",
    title: "+336 77 58 58 56",
    copy,
    copied,
  },
  {
    id:"3",
    name: "Github",
    title: "https://github.stephane.malho.fr",
    copy,
    copied,
  },
  {
    id:"4",
    name: "Curriculum Vitae",
    title: "CV au format PDF",
    copy,
    copied,
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
];

const experiences = [
  {
    title: "Développeur ReactJS",
    company_name: "DevPoint",
    icon: devpoint,
    iconBg: "#E6DEDD",
    date: "jan 2023 - juillet 2023",
    tabIndex: 0,
    points: [
      "Développement des features de présentation",
      "Création et mise en place d’un design système",
    ],
  },
  {
    title: "Développeur React.js",
    company_name: "Speed Order",
    icon: freelance,
    iconBg: "#383E56",
    date: "nov 2021 - dec 2022",
    tabIndex: 0,
    points: [
      "Développement de nouvelles feature avec un focus sur l’UX",
      "Résolution de bugs via des outils de l’écosystème React",
      "Création et mise en place d’un design système",
      "Méthodologie Agile/SCRUM via un système de tickets",
      "Méthodologie Multi branche suivant le branching system GitHubFlow",
    ],
  },
  {
    title: "Développeur Frontend",
    company_name: "Vallée sud drive",
    icon: valleesud,
    iconBg: "#383E56",
    date: "fev 2018 - mars 2020",
    tabIndex: 0,
    points: [
      "Création d’une base de donnée MongoDB exposée selon un protocole d’api REST.",
      "Contrôle d’identification, Cryptage des données sensible.",
      "Stack technique : React, Redux, Axios, Express, API REST, MongoDB, Git, ",
      "développement de l'application React avec MongoDB",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Collaborer avec Stéphane est un réel plaisir. Non seulement il est un développeur React talentueux, mais il crée une ambiance agréable de travail. Son approche collaborative et son esprit d'équipe sont inestimables.",
    name: "Patrick",
    designation: "lead dev",
    company: "speed order",
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
    designation: "Étudiante",
    company: "Openclassrooms",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Crazee Burger",
    description:
      "Application de restauration rapide, permettant d'enregister les commandes clients, en sélectionnant des produits. Le mode administrateur permet de gérer les commandes et les produits dynamiquement.",
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
    tabIndex: 0,
    image: crazyburger,
    source_code_link: "https://github.com/stephanemalho/crazy-burger",
    deployed_url: "https://crazy-burger-stephanemalho.vercel.app/",
  },
  {
    name: "CarSearch",
    description:
      "Application de recherche de véhicules d'occasion. L'application permet de rechercher des véhicules par marque, modèle, année, carburant. Les données sont récupérées via une API REST.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Next13",
        color: "green-text-gradient",
      },
      {
        name: "HeadlessUI",
        color: "pink-text-gradient",
      },
    ],
    tabIndex: 0,
    image: carsearch,
    source_code_link: "https://github.com/stephanemalho/car-search",
    deployed_url: "https://car-search-stephanemalho.vercel.app/",
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
    tabIndex: 0,
    image: promptopia,
    source_code_link: "https://github.com/stephanemalho/promptopia",
    deployed_url: "https://promptopia-livid.vercel.app/",
  },
  {
    name: "Kaseiki Umami",
    description:
      "Une intégration captivante d'une page web statique et responsive pour un restaurant de sushi à la thématique japonaise. L'ajout d'animations AOS procure une expérience visuelle immersive.",
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
    tabIndex: 0,
    image: kaseikiumami,
    source_code_link: "https://github.com/stephanemalho/KaisekiUmami",
    deployed_url: "https://kaiseki-umami-stephanemalho.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects, socialLinks };

