import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faBriefcase,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';

export interface TimelineItem {
  id: number;
  title: string;
  location: string;
  job: string;
  linkDescription: string;
  link: string;
  time: string;
  icon: IconProp;
}

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    location: 'Bitmovin GmbH, Austria, Wien',
    job: 'React, Mantine, SCSS, Java',
    linkDescription: 'Bitmovin',
    link: 'https://bitmovin.com/',
    time: '01.05.2022 - Present',
    icon: faBriefcase
  },
  {
    id: 2,
    title: 'Frontend Developer',
    location: 'Netconomy GmbH, Austria, Graz',
    job: 'Node, Java, React, SCSS',
    linkDescription: 'Netconomy',
    link: 'https://netconomy.net/',
    time: '01.06.2020 - 01.05.2022',
    icon: faBriefcase
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    location: 'X-Net Services GmbH, Austria, Linz',
    job: 'Python, Vue, React, SCSS',
    linkDescription: 'X-Net Services',
    link: 'https://www.x-net.at/de/',
    time: '15.01.2019 - 01.06.2020',
    icon: faBriefcase
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    location: 'Has-to-be GmbH, Austria, Salzburg',
    job: 'Php, Jquery, CSS',
    linkDescription: 'Has-to-be',
    link: 'https://has-to-be.com/de/',
    time: '10.10.2017 - 01.10.2018',
    icon: faBriefcase
  },
  {
    id: 5,
    title: 'Full Stack Developer',
    location: 'EKS InTec GmbH, Germany',
    job: 'Php, Jquery, CSS',
    linkDescription: 'EKS InTec',
    link: 'https://www.eks-intec.de/',
    time: '15.02.2017 - 01.08.2017',
    icon: faBriefcase
  },
  {
    id: 6,
    title: 'Graduated Engineer of Informatics',
    location: 'University of Bihac, Department of Electrical Engineering',
    job: 'Computer Science Course',
    linkDescription: 'Faculty of technical studies Bihac',
    link: 'https://tfb.ba/',
    time: '01.09.2012 - 10.10.2016',
    icon: faGraduationCap
  },
  {
    id: 7,
    title: 'Tutor',
    location: 'University of Bihac, Department of Electrical Engineering',
    job: 'Class: Software engineering',
    linkDescription: 'Faculty of technical studies Bihac',
    link: 'https://tfb.ba/',
    time: '01.09.2015 - 01.07.2016',
    icon: faBriefcase
  },
  {
    id: 8,
    title: 'Internship',
    location: 'IDK Studio, Bosnia & Herzegovina',
    job: 'Frontend Developer',
    linkDescription: 'IDK Studio',
    link: 'https://www.idkstudio.com/',
    time: '01.09.2014 - 01.07.2015',
    icon: faBriefcase
  },
  {
    id: 9,
    title: 'Internship',
    location: 'Infosys, Bosnia & Herzegovina',
    job: 'Database administrator',
    linkDescription: 'Infosys',
    link: 'https://www.infosys.ba/',
    time: '01.09.2013 - 01.07.2014',
    icon: faBriefcase
  }
];
