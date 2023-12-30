import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Parsa Safavi",
  initials: "PS",
  location: "Vancouver, BC, Canada",
  locationLink: "https://maps.app.goo.gl/rwMdboBq9voagg7a6",
  about: "Software Developer Specializing in Travel.",
  summary:
    "I'm a software developer specializing in travel software. I've contributed to a number of travel software in multiple verticals. I've become increasingly passionate about continuously improving the the travel management and booking ecosystem.",
  avatarUrl: "https://avatars.githubusercontent.com/u/12155336?v=4",
  contact: {
    email: "mail@parsa.pro",
    tel: "+1(604)902-5060",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/parsasi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/parsasi",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "British Columbia Institute of Technology",
      degree: "Full-Stack Web Development",
      start: "2019",
      end: "2021",
    },
  ],
  work: [
    {
      company: "NDC Solutions Inc.",
      link: "https://docs.orx.travel",
      badges: ["External API"],
      title: "Lead Developer",
      start: "2022",
      end: "Present",
      description:
        "Led the software development team responsible for designing and implementing an [external API that offers a complete travel booking solution. Utilized an event-driven architecture and message queues to effectively handle diverse real-world travel scenarios.",
    },
    {
      company: "NDC Solutions Inc.",
      link: "https://orxtravel.com",
      badges: ["SaaS"],
      title: "Software Developer",
      start: "2020",
      end: "2021",
      description:
        "Contributed to a SaaS Travel Management Application. Implemented a comprehensive and flexible travel policy engine, considered the most advanced in the industry.  Leveraged NextJs, and Laravel to create a range of applications, ensuring robustness and user-friendliness.",
    },
    {
      company: "Recruitable",
      link: "https://recruitable.now",
      badges: ["Internship"],
      title: "Intern Software Developer",
      start: "2020",
      end: "2020",
      description:
        "Created an automated data pipeline responsible for scraping, classifying and cleaning real-world data, that was then fed into machine learning models responsible for creating and evaluating candidates' resumes.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Remix",
    "PHP",
    "Laravel",
    "Software Architecture",
  ],
  projects: [
    {
      title: "Metrists",
      techStack: ["Remix", "TypeScript", "Postgres", "Redis"],
      description: "A way to read and share ebooks on the web.",
      link: {
        label: "metrists.com",
        href: "https://metrists.com/",
      },
    },
    {
      title: "js-exec",
      techStack: ["Javascript", "TypeScript", "Open source"],
      description:
        "Open source package that allows for sandboxing and executing Javascript code.",
      link: {
        label: "js-exec",
        href: "https://github.com/parsasi/js-exec",
      },
    },
    {
      title: "Dutyfree",
      techStack: ["Javascript", "TypeScript", "Open source"],
      description:
        "Open source package for creating web workers out of simple callbacks.",
      link: {
        label: "github.com",
        href: "https://github.com/parsasi/dutyfree",
      },
    },
  ],
} as const;
