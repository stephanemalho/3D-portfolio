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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
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
    title: "Developpeur Web",
    company_name: "Openclassrooms",
    icon: shopify,
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
  {
    title: "Developpeur Frontend",
    company_name: "DevPoint",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Avril 2023",
    points: [
      "Développement des features de présentation",
      "Création et mise en place d’un design système",
    ],
  },
  {
    title: "Developpeur React.js",
    company_name: "Crazy-e Burger",
    icon: starbucks,
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
    title: "Contactez moi ",
    company_name: "votre entreprise",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Demain",
    points: [
      "Rendez-vous sur le formulaire de contact en bas de page.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
