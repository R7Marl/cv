import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Luka Mateo Ayala",
  initials: "",
  location: "Argentina, Buenos Aires",
  locationLink: "https://maps.app.goo.gl/FUrvFYVNYFqUe8829",
  about:
    "I am a backend engineer with experience in designing and developing robust and scalable solutions.",
  summary:
    "I specialize in the implementation of microservices such as Express.js and NestJS, as well as the efficient management of NoSQL and SQL databases. My focus on code quality and system performance allows me to create applications that not only meet current requirements but are also future-proof. I am passionate about solving complex problems and continuously improving my skills through new challenges and technologies.",
  avatarUrl: "https://avatars.githubusercontent.com/u/61598384?s=400&u=57e0cc68c065373e8b0ed5341b90a49f20f0b808&v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "lukaelcapo2017gmail.com",
    tel: "+54 11 3904-9957",
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
      end: "current",
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
      badges: ["Remote"],
      title: "Full Stack Developer",
      start: "2021",
      end: "2023",
      description:
        "At SuitedHosting, I served as a Full Stack Web Developer, where I developed Discord bots using Node.js. Additionally, I created a web application for firewall management integrated with the OVH API. This application displayed real-time firewall rules provided by OVH and enabled users to create and delete rules. The platform also included a login and registration system connected with WHMCS, ensuring seamless user management and authentication.",
    },
    {
      company: "FreeLance",
      link: "",
      badges: ["Remote"],
      title: "Full Stack Developer",
      start: "2022",
      end: "2022",
      description:
        "I have created a control panel to manage the characters that you have on an MTA server, in it I got the data from the server's database and showed it after the user logs in with their game account, and so they can manage your name, and buy",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "React/NestJS/",
    "Node.js",
  ],
  projects: [
    {
      title: "Shift manager for gym",
      techStack: [
        "TypeScript",
        "React",
        "Vite",
        "PostgreSQL",
      ],
      description: "On this platform you can register, log in to create shifts in a pilates gym",
      link: {
        label: "github.com",
        href: "https://github.com/R7Marl/CRUD-TYPESCRIPT",
      },
    },
    {
      title: "Firewall Manager API REST",
      techStack: ["JavaScript", "Express.js", "OVH API"],
      description:
        "REST API that returns the rules coming from the OVH API for both game firewall and normal firewall and domains",
      link: {
        label: "github.com",
        href: "https://github.com/R7Marl/Backend-FirewallOVH-APIREST",
      },
    },
    {
      title: "Queue League of Legends",
      techStack: ["JavaScript", "Socket.io", "MongoDB", "API RIOTGAMES", "Node.js", "Express.js"],
      description:
        "This is a full stack website that is in development which tries to find new friends to play League of Legends which takes your League of Legends data through your game name and consults with the Riot Games API, and when given Clicking on a button will search for a game depending on the option you have set if you want to find DUO or more people to play, it links you according to your rank, level and winrate",
      link: {
        label: "github.com",
        href: "https://github.com/R7Marl/queue-clash-lol",
      },
    },
  ],
} as const;
