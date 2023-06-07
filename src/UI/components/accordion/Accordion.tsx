import { ReactNode, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStamp } from '@fortawesome/free-solid-svg-icons';

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
    const contents = accordionRef.current?.querySelectorAll('.accordion-panel');

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
      {data.map(({ title, imageUrl }, index) => (
        <div
          key={title}
          className="accordion-panel"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <button
            className="accordion-trigger"
            aria-controls={`panel${index}-content`}
            aria-expanded="false"
            onClick={onAccordionPanelClick(index)}
          >
            <FontAwesomeIcon className="icon" icon={faStamp} size="xl" />
          </button>
          <div
            className="accordion-content"
            aria-labelledby={`panel${index}-heading`}
          >
            <h2>{title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
