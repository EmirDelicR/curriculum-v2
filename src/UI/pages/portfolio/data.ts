export interface PortfolioItem {
  title: string;
  link: string;
  img: string;
}
interface PortfolioData {
  [key: string]: PortfolioItem;
}

export const PORTFOLIO_DATA: PortfolioData = {
  project_default: {
    title: '',
    link: '',
    img: ''
  },
  project_1: {
    title: 'Has.to.be',
    link: 'https://support.has-to-be.com/hc/en-us',
    img: 'images/assets/projects/has-to-be.webp'
  },
  project_2: {
    title: 'X-Net',
    link: 'https://www.x-net.at/de',
    img: 'images/assets/projects/x-net.webp'
  },
  project_3: {
    title: 'Netconomy',
    link: 'https://www.douglas.at/de',
    img: 'images/assets/projects/douglas.webp'
  },
  project_4: {
    title: 'Bitmovin',
    link: 'https://bitmovin.com/',
    img: 'images/assets/projects/bitmovin.webp'
  },
  project_5: {
    title: 'React starter pack',
    link: 'https://github.com/EmirDelicR/bau-app',
    img: 'images/assets/projects/vite.webp'
  },
  project_6: {
    title: 'Curriculum',
    link: 'some link',
    img: 'images/assets/projects/cv.webp'
  }
};
