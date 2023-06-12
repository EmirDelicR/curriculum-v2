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
    title: 'Has.to.be Website',
    link: 'some link',
    img: 'link'
  },
  project_2: {
    title: 'X-Net Website',
    link: 'some link',
    img: 'link'
  },
  project_3: {
    title: 'Netconomy Website',
    link: 'some link',
    img: 'link'
  },
  project_4: {
    title: 'Bitmovin Website',
    link: 'some link',
    img: 'link'
  },
  project_5: {
    title: 'React starter pack',
    link: 'some link',
    img: 'link'
  },
  project_6: {
    title: 'Curriculum Website',
    link: 'some link',
    img: 'link'
  }
};
