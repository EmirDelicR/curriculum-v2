import useMediaQuery from '@/hooks/useMediaQuery';

import './Portfolio.scss';
import { useState } from 'react';

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
          <path d="M0,220 L0,220 Q60,200 60,10 Q60,-50 110,-50" />
        </svg>
        <svg
          className="curve-path"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,220 L0,220 Q80,220 80,80 Q80,50 98,50" />
        </svg>
        <svg
          className="curve-path"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,220 L0,220 Q90,230 90,160 Q90,150 98,150" />
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
          <path d="M0,0 L0,0 Q60,0 60,35 Q60,75 98,70" />
        </svg>
        <svg className="curve-path" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L0,0 Q45,0 45,45 Q45,185 98,170" />
        </svg>
        <svg className="curve-path" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L0,0 Q35,0 35,55 Q35,270 98,265" />
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

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const onProjectClick = (project: number) => () => {
    setActiveProject(project);
  };

  return (
    <div className="portfolio-page">
      <div className="project-list">
        <div className="side-content left">
          {[1, 2, 3].map((projectNumber) => (
            <div key={`project-${projectNumber}`}>
              <button
                aria-label="project-button"
                className="project-button"
                onClick={onProjectClick(projectNumber)}
              >
                Project {projectNumber}
              </button>
            </div>
          ))}
        </div>
        <LeftSideSvg />
        <div className={`deck ${activeProject !== null ? 'active' : ''}`}>
          <span>Deck content {activeProject}</span>
        </div>
        <RightSideSvg />
        <div className="side-content right">
          {[4, 5, 6].map((projectNumber) => (
            <div key={`project-${projectNumber}`}>
              <button
                aria-label="project-button"
                className="project-button"
                onClick={onProjectClick(projectNumber)}
              >
                Project {projectNumber}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
