import {
  faGithub,
  faLinkedinIn,
  faXing
} from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

export const PAGES = [
  'home',
  'timeline',
  'skill',
  'certificate',
  'portfolio',
  'tips',
  'contact'
];

export const SOCIAL_PAGES = [
  {
    name: 'git',
    icon: faGithub,
    link: 'https://github.com/EmirDelicR'
  },
  {
    name: 'linkedin',
    icon: faLinkedinIn,
    link: 'https://linkedin.com/in/emir-delic-redzepagic-114190131'
  },
  {
    name: 'xing',
    icon: faXing,
    link: 'https://www.xing.com/profile/Emir_DelicRedzepagic?sc_o=mxb_p'
  },
  {
    name: 'cv',
    icon: faFileDownload,
    // link: require('@/assets/doc/CV.pdf'),
    link: 'pdf.link',
    download: 'CV.pdf'
  }
];

const LINKS = {
  company:
    '<a class="language-cour" href="https://www.x-net.at/de" target="_blank" rel="noreferrer">X-net Service</a>',
  git: ' <a class="language-cour" href="https://github.com/EmirDelicR/curriculum" target="_blank" rel="noreferrer">code</a>',
  mail: '<a class="language-cour" href="mailto:emirdelictbf@gmail.com?subject=Web-site mail">emirdelictbf@gmail.com</a>'
};
