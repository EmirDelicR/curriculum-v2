export interface PortfolioItem {
  title: string;
  work: string;
  learned: string;
  link: string;
  img: string;
}
interface PortfolioData {
  [key: string]: PortfolioItem;
}

export const PORTFOLIO_DATA: PortfolioData = {
  project_default: {
    title: '',
    work: '',
    learned: '',
    link: '',
    img: ''
  },
  project_1: {
    title: 'Has.to.be Website',
    work: 'text',
    learned: 'learned text',
    link: 'some link',
    img: 'link'
  },
  project_2: {
    title: 'X-Net Website',
    work: 'text',
    learned: 'learned text',
    link: 'some link',
    img: 'link'
  },
  project_3: {
    title: 'Netconomy Website',
    work: 'text',
    learned: 'learned text',
    link: 'some link',
    img: 'link'
  },
  project_4: {
    title: 'Bitmovin Website',
    work: 'text',
    learned: 'learned text',
    link: 'some link',
    img: 'link'
  },
  project_5: {
    title: 'React starter pack',
    work: 'text',
    learned: 'learned text',
    link: 'some link',
    img: 'link'
  },
  project_6: {
    title: 'Curriculum Website',
    work: 'text',
    learned: 'learned text',
    link: 'some link',
    img: 'link'
  }
};
