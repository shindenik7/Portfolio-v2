import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: `Nik's Portfolio`, // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my space !!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Nikhil.png',
  paragraphOne: `I'm an software engineer working with web applications and web infrastructure. I have been developing since 2 years but thinking since a I was a kid`,
  paragraphTwo: `I am an Bachelors in computer science with no. of projects with technologies like ReactJS, ExpressJS, java, Spring MVC, Hibernate.`,
  paragraphThree: `I'm looking forward to explore no. of things and opportunities in the field out there.`,
  resume: 'Resume2020.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Leverage.jpg',
    title: 'Leverage',
    info: 'Leverage is an end-to-end supply chain management system powered by artificial intelligence. It tracks revenue and reduced margins, manages Products/Orders. 📦',
    info2: '',
    url: 'https://app.lvrg.ai',
  },
  {
    id: nanoid(),
    img: 'TuneIt.png',
    title: 'Tune-It',
    info: 'Tune-It is an music player packed with basic features but with unique feature - Generates playlist based on current weather.🌩️',
    info2: '',
    repo: 'https://github.com/shindenik7', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'SeriousSam.png',
    title: 'Online Server',
    info: 'Shows live status of all the gaming servers, Responsive design equipped with no. of features.🎮',
    info2: '',
    url: '',
    repo: 'https://github.com/Nikshinde7/SamSiteDemo', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/playdead_7',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nikhil-shinde-a505a8184',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/shindenik7',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
