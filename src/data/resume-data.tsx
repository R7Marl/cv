import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Luka Mateo Ayala",
  initials: "",
  location: "Monte Grande, Buenos Aires, Argentina",
  locationLink: "https://maps.app.goo.gl/FUrvFYVNYFqUe8829",
  about:
    "Soy un ingeniero fullstack con experiencia en el diseño y desarrollo de soluciones robustas y escalables tanto en el frontend como en el backend.",
  summary:
    "Me especializo en la implementación de microservicios como NestJS. Uso de frameworks  ExpressJS y Laravel, así como en la gestión eficiente de bases de datos NoSQL y SQL. Mi enfoque en la calidad del código y el rendimiento del sistema me permite crear aplicaciones que no solo cumplen con los requisitos actuales, sino que también están preparadas para el futuro. Me apasiona resolver problemas complejos y mejorar continuamente mis habilidades a través de nuevos desafíos y tecnologías.",
  avatarUrl: "https://avatars.githubusercontent.com/u/61598384?s=400&u=57e0cc68c065373e8b0ed5341b90a49f20f0b808&v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "lukaelcapo2017gmail.com",
    tel: "+54 11 3904-9957\nInglés B1",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/R7marl",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/luka-mateo-ayala-8612bb212/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/LukaEnginner",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Provincial de Ezeiza",
      degree: "Técnico en Desarrollo de Software",
      start: "2023",
      end: "actualidad",
    },
    {
      school: "Universidad Nacional de Almirante Brown",
      degree: "Bases de datos SQL",
      start: "2022",
      end: "2023"
    },
    {
      school: "Universidad Técnologia Nacional",
      degree: "Desarrollo Web",
      start: "2023",
      end: "2024",
    },
    {
      school: "SoyHenry Bootcamp",
      degree: "Desarrollador Web Full Stack",
      start: "2024",
      end: "2024",
    }
  ],
  work: [
    {
      company: "SuitedHosting",
      link: "https://suitedhosting.com/",
      badges: ["Remoto"],
      title: "Desarrollador Full Stack",
      start: "2021",
      end: "2023",
      description:
        "En SuitedHosting, me desempeñé como Desarrollador Web Full Stack, donde desarrollé bots de Discord utilizando Node.js. Además, creé una aplicación web para la gestión de firewall integrada con la API de OVH. Esta aplicación mostraba reglas de firewall en tiempo real proporcionadas por OVH y permitía a los usuarios crear y eliminar reglas. La plataforma también incluía un sistema de inicio de sesión y registro conectado con WHMCS, garantizando una gestión y autenticación de usuarios sin problemas.",
    },
    {
      company: "Freelance",
      link: "",
      badges: ["Remoto"],
      title: "Desarrollador Full Stack",
      start: "2022",
      end: "2022",
      description:
        "He creado un panel de control para administrar los personajes que tienes en un servidor MTA, en él obtuve los datos de la base de datos del servidor y los mostré después de que el usuario inicia sesión con su cuenta de juego, y así pueden administrar su nombre y comprar",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "GIT",
    "NestJS",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Docker",
    "Deployments",
    "Tailwind",
    "AWS",
    "C",
    "python"
  ],
  projects: [
    {
      title: "Gestor de turnos para gimnasio",
      techStack: [
        "TypeScript",
        "React",
        "Vite",
        "PostgreSQL",
      ],
      description: "En esta plataforma puedes registrarte, iniciar sesión para crear turnos en un gimnasio de pilates",
      link: {
        label: "github.com",
        href: "https://github.com/R7Marl/CRUD-TYPESCRIPT",
      },
    },
    {
      title: "API REST para gestor de firewall",
      techStack: ["JavaScript", "Express.js", "API de OVH"],
      description:
        "API REST que devuelve las reglas provenientes de la API de OVH tanto para firewall de juego como para firewall normal y dominios",
      link: {
        label: "github.com",
        href: "https://github.com/R7Marl/Backend-FirewallOVH-APIREST",
      },
    },
    {
      title: "Cola de League of Legends",
      techStack: ["JavaScript", "Socket.io", "MongoDB", "API de RIOTGAMES", "Node.js", "Express.js"],
      description:
        "Este es un sitio web full stack que está en desarrollo y que intenta encontrar nuevos amigos para jugar League of Legends, el cual toma tus datos de League of Legends a través de tu nombre de juego y consulta con la API de Riot Games, y al hacer clic en un botón buscará una partida dependiendo de la opción que hayas establecido si quieres encontrar DUO o más personas para jugar, te vincula según tu rango, nivel y tasa de victorias",
      link: {
        label: "github.com",
        href: "https://github.com/R7Marl/queue-clash-lol",
      },
    },
    {
      title: "eCommerce API REST",
      techStack: ["TypeScript", "PostgreSQL", "TypeORM", "JWT", "Swagger", "NestJS"],
      description: "Esto es una API REST de un eCommerce básico el cual iremos mejorando con el tiempo.",
      link: {
      label: "github.com",
      href: "https://github.com/R7Marl/ecommerce-nestjs/",
      }
    },
  ],
} as const;

