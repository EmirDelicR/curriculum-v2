const LINK_PAGE_CLASS = 'link link--page';

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
    link: 'https://github.com/EmirDelicR'
  },
  {
    name: 'linkedin',
    icon: 'fab fa-linkedin-in',
    link: 'https://linkedin.com/in/emir-delic-redzepagic-114190131'
  },
  {
    name: 'xing',
    icon: 'fab fa-xing',
    link: 'https://www.xing.com/profile/Emir_DelicRedzepagic?sc_o=mxb_p'
  },
  {
    name: 'cv',
    icon: 'fas fa-file-download',
    // link: require('@/assets/doc/CV.pdf'),
    link: 'pdf.link',
    download: 'CV.pdf'
  }
];

export { NORMAL_PAGES, SOCIAL_PAGES, SMALL_PAGES };
