import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  crash,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  portfolio,
  tripguide,
  threejs,
  flask,
  reactimg,
  ml,
  vue,
  quantified,
  kanban,
  firebase,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Flask Backend Developer',
    icon: flask,
  },
  {
    title: 'React Developer',
    icon: reactimg,
  },
  {
    title: 'Vue Developer',
    icon: vue,
  },
  {
    title: 'Machine Learning Enthusiast',
    icon: ml,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'firebase',
    icon: firebase,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Flask Developer',
    company_name: 'Started Learning about Web Development',
    icon: flask,
    iconBg: '#383E56',
    date: 'April 2022 - May 2022',
    points: [
      'Developing and maintaining web applications using Flask and jinja templates.',
      'Implementing primitive design and testing compatibility in other devices.',
    ],
  },
  {
    title: 'Vue Developer',
    company_name: 'Learning new technologies to upgrade my arsenal',
    icon: vue,
    iconBg: '#383E56',
    date: 'September 2022 - November 2023',
    points: [
      'Developing and maintaining web applications using Vue.js and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Passion Projects',
    icon: reactimg,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Quantified Self V2',
    description:
      'Web-based platform that allows users to add trackers to day-to-day activities to track their progress over time.',
    tags: [
      {
        name: 'Flask',
        color: 'blue-text-gradient',
      },
      {
        name: 'Vue.js',
        color: 'green-text-gradient',
      },
      {
        name: 'Vuetify',
        color: 'pink-text-gradient',
      },
    ],
    image: quantified,
    source_code_link: 'https://github.com/Maheedhar15/Quantfied_self_v2',
  },
  {
    name: 'Kanban Application',
    description:
      'Web application that enables users to add tasks to kanban boards which in turn will send a daily reminder of pending tasks and will send a monthly report based on your performace over the last month.',
    tags: [
      {
        name: 'Vue.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Flask',
        color: 'green-text-gradient',
      },
      {
        name: 'Chart.js',
        color: 'pink-text-gradient',
      },
    ],
    image: kanban,
    source_code_link: 'https://github.com/Maheedhar15/Kanban-App',
  },
  {
    name: 'Crash-n-watch',
    description:
      'This web application serves as an alternative to youtube, being able to search, watch channels and videos of content creators.',
    tags: [
      {
        name: 'React.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'RapidAPI',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: crash,
    source_code_link: 'https://github.com/Maheedhar15/Crash-n-watch',
  },
  {
    name: '3D-Portfolio',
    description: 'This web application serves as my personal Portfolio.',
    tags: [
      {
        name: 'React.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'ThreeJS',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/Maheedhar15/3D-Portfolio',
  },
];

export { services, technologies, experiences, testimonials, projects };
