import { useEffect, useRef } from 'react';

import './Certificates.scss';

export default function Certificates() {
  const accordionRef = useRef<HTMLDivElement>(null);

  const onAccordionPanelClick = (index: number) => () => {
    const buttons = accordionRef.current?.querySelectorAll('button');
    const contents =
      accordionRef.current?.querySelectorAll('.accordion-content');

    buttons!.forEach((button) => {
      button.setAttribute('aria-expanded', 'false');
    });

    contents!.forEach((content) => {
      content.setAttribute('aria-hidden', 'true');
    });

    buttons![index].setAttribute('aria-expanded', 'true');
    contents![index].setAttribute('aria-hidden', 'false');
  };

  return (
    <div className="wrapper">
      <div className="accordion" ref={accordionRef}>
        <div className="accordion-panel" onClick={onAccordionPanelClick(0)}>
          <h2 id="panel1-heading">
            <button
              className="accordion-trigger"
              aria-controls="panel1-content"
              aria-expanded="true"
            >
              <span className="accordion-title" id="panel1-title">
                Boating
              </span>
              {/* <Icon></Icon> */}
            </button>
          </h2>

          <div
            className="accordion-content"
            id="panel1-content"
            aria-labelledby="panel1-heading"
            aria-hidden="false"
            role="region"
          >
            <p>
              Port mutiny draught handsomely ye furl flogging line shrouds hulk.
              Spirits Plate Fleet code of conduct.
            </p>
            <img
              className="accordion-image"
              src="assets/boat.webp"
              alt="A sailboat at sea during sunset"
            />
          </div>
        </div>

        <div className="accordion-panel" onClick={onAccordionPanelClick(1)}>
          <h2 id="panel2-title">
            <button
              className="accordion-trigger"
              aria-expanded="false"
              aria-controls="panel2-content"
            >
              <span className="accordion-title"> Anchors </span>

              {/* icona */}
            </button>
          </h2>

          <div
            role="region"
            aria-labelledby="panel2-title"
            aria-hidden="true"
            className="accordion-content"
            id="panel2-content"
          >
            <p>
              Ahoy league hands Sea Legs keelhaul salmagundi fire ship crimp
              Privateer galleon. Booty boom yard boatswain quarter.
            </p>
            <img
              className="accordion-image"
              src="assets/anchor.webp"
              alt="closeup of a metal chain connected to a metal ring in the ground"
            />
          </div>
        </div>

        <div className="accordion-panel" onClick={onAccordionPanelClick(2)}>
          <h2 id="panel3-title">
            <button
              className="accordion-trigger"
              aria-expanded="false"
              aria-controls="panel3-content"
            >
              <span className="accordion-title"> Fishing </span>
              icona
            </button>
          </h2>

          <div
            role="region"
            aria-labelledby="panel3-title"
            aria-hidden="true"
            className="accordion-content"
            id="panel3-content"
          >
            <p>
              No prey, no pay heave down splice the main brace furl cable snow
              walk the plank chase guns piracy bucko.
            </p>
            <img
              className="accordion-image"
              src="assets/fishing.webp"
              alt="A person fishing in the ocean"
            />
          </div>
        </div>

        <div className="accordion-panel" onClick={onAccordionPanelClick(3)}>
          <h2 id="panel4-title">
            <button
              className="accordion-trigger"
              aria-expanded="false"
              aria-controls="panel4-content"
            >
              <span className="accordion-title"> Lighthouses </span>
              icona
            </button>
          </h2>

          <div
            role="region"
            aria-labelledby="panel4-title"
            aria-hidden="true"
            className="accordion-content"
            id="panel4-content"
          >
            <p>
              Deadlights squiffy salmagundi cable pinnace parrel topsail Corsair
              Arr mizzenmast.
            </p>
            <img
              className="accordion-image"
              src="assets/lighthouse.webp"
              alt="A white lighthouse with red top"
            />
          </div>
        </div>
        <div className="accordion-panel" onClick={onAccordionPanelClick(4)}>
          <h2 id="panel5-title">
            <button
              className="accordion-trigger"
              aria-expanded="false"
              aria-controls="panel5-content"
            >
              <span className="accordion-title"> Reefs </span>
              icona
            </button>
          </h2>

          <div
            role="region"
            aria-labelledby="panel5-title"
            aria-hidden="true"
            className="accordion-content"
            id="panel5-content"
          >
            <p>
              Keel yard poop deck brigantine gaff six pounders bring a spring
              upon her cable interloper lad pink.
            </p>
            <img
              className="accordion-image"
              src="assets/reef.webp"
              alt="reef outcropping with a lot of orange fish swimming around it"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
