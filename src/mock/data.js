import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi , I'm",
  name: 'Somya Singh',
  subtitle: "I'm a Software Enginner",
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'pic1.jpeg',
  paragraphOne: "I'm pursing my graduation from Birla Institue Of technology, Mesra. I'm a Btech CSE student.",
  paragraphTwo: "Regarding development, I prefer working with the JavaScript ecosystem. Hence I'm familiar with ReactJS, CSS, HTML, Nodejs and working on both font-end and BAck-end.I also fiddle with variety of technologies such as Databases. Nevertheles,I'm always willing to explore and learn new skills or technology.",
  paragraphThree: "Apart from programming and desiging, my hobbies are listening to music, outdoor games, exploring nature, photography,  browsing dank memes and binge watching drama and movies. ",
  resume: 'file:///C:/Users/lenovo/Downloads/SOMYA%20SINGH%20CV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'food.jpg',
    title: 'Food-Recipe',
    info: 'This site provides flexibility to user to search top rated and variety of recipes from available recipes in cloud. This is very handy application, which every user can search cloud for recipes. ',
    info2: 'Stack : ReactJS',
    url: 'https://somyabit.github.io/Food-Recipe/',
    repo: 'https://github.com/somyaBIT/Food-Recipe', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'WOW STILL HERE ?!',
  btn: "Let's Talk",
  email: 'mailto:somya4287@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/_somya._.singh._chauhan_/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/profile.php?id=100009846668343',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/somya-singh-597b0b16a',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/somyaBIT',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
