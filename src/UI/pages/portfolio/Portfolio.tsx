import './Portfolio.scss';

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="wrapper">
        <div className="backdrop"></div>
        <div className="project-list">
          <div className="side-content left">
            <div>Project 1</div>
            <div>Project 2</div>
            <div>Project 3</div>
          </div>
          <div className="svg-paths">
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
          <div className="deck">
            <span>Deck content</span>
          </div>
          <div className="svg-paths">
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
          <div className="side-content right">
            <div>Project 4</div>
            <div>Project 5</div>
            <div>Project 6</div>
          </div>
        </div>
      </div>
    </div>
  );
}
