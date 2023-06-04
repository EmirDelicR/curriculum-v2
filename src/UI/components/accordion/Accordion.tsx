import { ReactNode, useRef } from 'react';

export interface AccordionItem {
  title: string;
  icon: ReactNode;
  description?: string;
  imageUrl: string;
}

interface Props {
  data: AccordionItem[];
}

import './Accordion.scss';

export default function Accordion({ data }: Props) {
  const accordionRef = useRef<HTMLDivElement>(null);

  const onAccordionPanelClick = (position: number) => () => {
    const buttons = accordionRef.current?.querySelectorAll('button');
    const contents =
      accordionRef.current?.querySelectorAll('.accordion-content');

    buttons!.forEach((button) => {
      button.setAttribute('aria-expanded', 'false');
    });

    contents!.forEach((content) => {
      content.setAttribute('aria-hidden', 'true');
    });

    buttons![position].setAttribute('aria-expanded', 'true');
    contents![position].setAttribute('aria-hidden', 'false');
  };

  return (
    <div className="accordion" ref={accordionRef}>
      {data.map(({ title, imageUrl, description }, index) => (
        <div
          key={title}
          className="accordion-panel"
          onClick={onAccordionPanelClick(index)}
        >
          <h2 id={`panel${index}-heading`}>
            <button
              className="accordion-trigger"
              aria-controls={`panel${index}-content`}
              aria-expanded="true"
            >
              <span className="accordion-title" id={`panel${index}-title`}>
                {title}
              </span>
              {/* <Icon></Icon> */}
            </button>
          </h2>

          <div
            className="accordion-content"
            id="panel1-content"
            aria-labelledby={`panel${index}-heading`}
            aria-hidden="false"
            role="region"
          >
            <p>{description}</p>
            <img
              className="accordion-image"
              src={imageUrl}
              alt="Accordion image"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
