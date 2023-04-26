const LINK_PAGE_CLASS = 'link link--page';
const LINK_SOCIAL_CLASS = 'link link--social link--faded';

const NORMAL_PAGES = [
  { name: 'home', linkClass: LINK_PAGE_CLASS },
  {
    name: 'timeline',
    linkClass: LINK_PAGE_CLASS
  },
  { name: 'skill', linkClass: LINK_PAGE_CLASS },
  {
    name: 'certificate',
    linkClass: LINK_PAGE_CLASS
  },
  {
    name: 'portfolio',
    linkClass: LINK_PAGE_CLASS
  },
  { name: 'tips', linkClass: LINK_PAGE_CLASS }
];

const SMALL_PAGES = [
  {
    name: 'contact',
    linkClass: `${LINK_PAGE_CLASS} link--faded`
  }
];

const SOCIAL_PAGES = [
  {
    name: 'git',
    icon: 'fab fa-github',
    link: 'https://github.com/EmirDelicR',
    social: true,
    linkClass: LINK_SOCIAL_CLASS
  },
  {
    name: 'linkedin',
    icon: 'fab fa-linkedin-in',
    link: 'https://linkedin.com/in/emir-delic-redzepagic-114190131',
    social: true,
    linkClass: LINK_SOCIAL_CLASS
  },
  {
    name: 'xing',
    icon: 'fab fa-xing',
    link: 'https://www.xing.com/profile/Emir_DelicRedzepagic?sc_o=mxb_p',
    social: true,
    linkClass: LINK_SOCIAL_CLASS
  },
  {
    name: 'cv',
    icon: 'fas fa-file-download',
    // link: require('@/assets/doc/CV.pdf'),
    link: 'pdf.link',
    social: true,
    linkClass: LINK_SOCIAL_CLASS,
    download: 'CV.pdf'
  }
];

const GRAPH_DATASET_CONFIG = {
  backgroundColor: 'rgba(62, 112, 255, 0.3)',
  borderColor: 'rgba(62, 112, 255, 1)',
  borderWidth: 0.5,
  pointBackgroundColor: 'rgba(62, 112, 255, 1)',
  pointBorderColor: 'blue',
  pointHoverBackgroundColor: 'rgba(62, 112, 255, 1)',
  pointHoverBorderColor: 'grey'
};

const GRAPH_RADAR_OPTIONS = {
  aspectRatio: 1,
  responsive: true,
  legend: {
    position: 'bottom'
  },
  title: {
    fontColor: 'rgba(62, 112, 255, 1)',
    fontSize: 18,
    display: true
  },
  scale: {
    gridLines: {
      color: [
        'rgba(62, 112, 255, 0)',
        'rgba(62, 112, 255, 0.1)',
        'rgba(62, 112, 255, 0.2)',
        'rgba(62, 112, 255, 0.3)',
        'rgba(62, 112, 255, 0.4)',
        'rgba(62, 112, 255, 0.5)',
        'rgba(62, 112, 255, 0.6)',
        'rgba(62, 112, 255, 0.7)',
        'rgba(62, 112, 255, 0.8)',
        'rgba(62, 112, 255, 0.9)'
      ]
    },
    ticks: {
      backdropColor: 'transparent',
      beginAtZero: true,
      suggestedMax: 50,
      fontColor: 'rgba(62, 112, 255, 0.5)'
    }
  }
};

const ALL_LINKS = {
  company:
    '<a class="language-cour" href="https://www.x-net.at/de" target="_blank" rel="noreferrer">X-net Service</a>',
  git: ' <a class="language-cour" href="https://github.com/EmirDelicR/curriculum" target="_blank" rel="noreferrer">code</a>',
  mail: '<a class="language-cour" href="mailto:emirdelictbf@gmail.com?subject=Web-site mail">emirdelictbf@gmail.com</a>'
};

const CERTIFICATIONS = [
  {
    title: 'Frontend',
    image: 'certificates/FCC.jpg'
  },
  {
    title: 'Java Script',
    image: 'certificates/JS.jpg'
  },
  {
    title: 'Node.js',
    image: 'certificates/Node.jpg'
  },
  {
    title: 'Progressive Web App',
    image: 'certificates/PWA.jpg'
  },
  {
    title: 'Python and Django',
    image: 'certificates/Python.jpg'
  },
  {
    title: 'Python',
    image: 'certificates/Python2.jpg'
  },
  {
    title: 'React',
    image: 'certificates/React.jpg'
  },
  {
    title: 'Type Script',
    image: 'certificates/TS.jpg'
  },
  {
    title: 'Vue.js (Router, Vuex)',
    image: 'certificates/Vue.jpg'
  },
  {
    title: 'Vue.js',
    image: 'certificates/Vue2.jpg'
  }
];

export {
  NORMAL_PAGES,
  SOCIAL_PAGES,
  SMALL_PAGES,
  GRAPH_RADAR_OPTIONS,
  GRAPH_DATASET_CONFIG,
  ALL_LINKS,
  CERTIFICATIONS
};
