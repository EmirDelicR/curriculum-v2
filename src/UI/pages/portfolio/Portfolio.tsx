import './Portfolio.scss';

function LeftSideSvg() {
  const isMobile = !true;

  if (isMobile) {
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
      <svg className="curve-path" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,50 L0,50 Q50,50 50,120 Q20,385 400,300" />
      </svg>
      <span className="line-path"></span>
      <svg className="curve-path" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,290 L0,290 Q50,290 50,250 Q50,60 180,20" />
      </svg>
    </div>
  );
}

function RightSideSvg() {
  const isMobile = !true;

  if (isMobile) {
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
      <svg className="curve-path" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,310 L0,310 Q100,310 100,250 Q100,50 180,50" />
      </svg>
      <span className="line-path"></span>
      <svg className="curve-path rotate" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,25 L0,25 Q100,50 100,120 Q100,300 180,290" />
      </svg>
    </div>
  );
}
export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="project-list">
        <div className="side-content left">
          <div>Project 1</div>
          <div>Project 2</div>
          <div>Project 3</div>
        </div>
        <LeftSideSvg />
        <div className="deck">
          <span>Deck content</span>
        </div>
        <RightSideSvg />
        <div className="side-content right">
          <div>Project 4</div>
          <div>Project 5</div>
          <div>Project 6</div>
        </div>
      </div>
    </div>
  );
}

/**
 * 
   <div className="svg-paths left">
          <svg
            className="curve-path"
            viewBox="0 0 30 55"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,0 L0,0 Q15,0 15,35 Q15,85 85,50" />
          </svg>
          <span className="line-path"></span>
          <svg
            className="curve-path rotate"
            viewBox="0 0 30 55"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,55 L0,55 Q15,55 15,35 Q15,-10 35,-8" />
          </svg>
        </div> 

         <div className="svg-paths right">
          <svg
            className="curve-path"
            viewBox="0 0 30 55"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,62 L0,62 Q15,62 15,35 Q15,0 35,0" />
          </svg>
          <span className="line-path"></span>
          <svg
            className="curve-path rotate"
            viewBox="0 0 30 55"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,-10 L0,-10 Q15,0 15,25 Q15,65 65,50" />
          </svg>
        </div>
  
 */
