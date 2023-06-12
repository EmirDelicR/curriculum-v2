import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import useMediaQuery from '@/hooks/useMediaQuery';

import Orb from '@/UI/components/orb/Orb';
import Close from '@/UI/components/buttons/close/Close';
import AnimatedText from '@/UI/components/animatedText/AnimatedText';
import GeneralLink from '@/UI/components/links/generalLink/GeneralLink';

import { PortfolioItem, PORTFOLIO_DATA } from './data';

import './Portfolio.scss';

function LeftSideSvg() {
  const isSmallSize = useMediaQuery('(max-width: 1140px)');

  if (isSmallSize) {
    return (
      <div className="svg-paths left">
        <svg
          className="curve-path"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,150 L0,150 Q60,140 60,10 Q60,-50 110,-40" />
        </svg>
        <svg
          className="curve-path"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,150 L0,150 Q70,140 70,70 Q70,25 98,25" />
        </svg>
        <svg
          className="curve-path"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,150 L0,150 Q90,150 90,100 Q90,90 98,90" />
        </svg>
      </div>
    );
  }

  return (
    <div className="svg-paths left">
      <svg
        viewBox="0 0 100 100"
        className="curve-path"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,10 L0,10 Q30,10 30,60 Q30,100 105,98" />
      </svg>
      <span className="line-path"></span>
      <svg
        viewBox="0 0 100 100"
        className="curve-path"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,90 L0,90 Q30,90 30,40 Q30,0 100,0" />
      </svg>
    </div>
  );
}

function RightSideSvg() {
  const isSmallSize = useMediaQuery('(max-width: 1140px)');

  if (isSmallSize) {
    return (
      <div className="svg-paths right">
        <svg className="curve-path" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L0,0 Q60,0 60,35 Q60,60 98,60" />
        </svg>
        <svg className="curve-path" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L0,0 Q45,0 45,45 Q45,135 98,130" />
        </svg>
        <svg className="curve-path" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L0,0 Q35,0 35,55 Q35,195 98,190" />
        </svg>
      </div>
    );
  }

  return (
    <div className="svg-paths right">
      <svg
        viewBox="0 0 100 100"
        className="curve-path"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100,10 L100,10 Q70,10 70,50 Q70,98 0,98" />
      </svg>
      <span className="line-path"></span>
      <svg
        viewBox="0 0 100 100"
        className="curve-path"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,0 L0,0 Q70,0 70,50 Q70,85 100,90" />
      </svg>
    </div>
  );
}

interface SideContentProps {
  contentClass: 'left' | 'right';
  onClickHandler: (projectNUmber: number) => () => void;
  data: number[];
}
function SideContent({ contentClass, data, onClickHandler }: SideContentProps) {
  return (
    <div className={`side-content ${contentClass}`}>
      {data.map((projectNumber) => (
        <div key={`project-${projectNumber}`}>
          <button
            aria-label="project-button"
            className="project-button"
            onClick={onClickHandler(projectNumber)}
          >
            Project {projectNumber}
          </button>
        </div>
      ))}
    </div>
  );
}

function PortfolioContent({
  onClose,
  activeProject
}: {
  onClose: () => void;
  activeProject: number | null;
}) {
  const { t } = useTranslation();
  const data: PortfolioItem =
    PORTFOLIO_DATA[
      `project_${activeProject !== null ? activeProject : 'default'}`
    ];

  return (
    <div className="inner-content">
      <Close onCloseClick={onClose} displayTypeOnBigScreen="block" />
      <div className="inner-items">
        <h1>{data.title}</h1>
        <div className="inner-items-wrapper">
          <div className="description">
            <div className="work-item">
              <h2>- {t('portfolio-data.work-headline')}</h2>
              <p>{t(`portfolio-data.project_${activeProject}_worked`)}</p>
            </div>
            <div className="learn-item">
              <h2>- {t('portfolio-data.learned-headline')}</h2>
              <p>{t(`portfolio-data.project_${activeProject}_learned`)}</p>
            </div>
          </div>
          <div className="project-image">
            <img
              alt="project-image"
              width="320px"
              height="480px"
              src={data.img}
              loading="lazy"
            />
            <img
              alt="project-image"
              width="320px"
              height="480px"
              src={data.img}
              loading="lazy"
            />
            <img
              alt="project-image"
              width="320px"
              height="480px"
              src={data.img}
              loading="lazy"
            />
          </div>
        </div>
        <div className="link-item">
          <GeneralLink navigateTo={data.link}>Visit</GeneralLink>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const onProjectClick = (project: number) => () => {
    setActiveProject(project);
  };

  return (
    <div className={`portfolio-page ${activeProject !== null ? 'active' : ''}`}>
      <AnimatedText isHeadline={true}>{t('portfolio-data.info')}</AnimatedText>
      <div className="project-list">
        <SideContent
          contentClass="left"
          onClickHandler={onProjectClick}
          data={[1, 2, 3]}
        />
        <LeftSideSvg />
        <div className="sphere">
          <Orb />
        </div>
        <RightSideSvg />
        <SideContent
          contentClass="right"
          onClickHandler={onProjectClick}
          data={[4, 5, 6]}
        />
      </div>
      <div className={`content ${activeProject !== null ? 'active' : ''}`}>
        <PortfolioContent
          activeProject={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </div>
  );
}
