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

// export default function Accordion({ data }: Props) {
//   const accordionRef = useRef<HTMLDivElement>(null);

//   const onAccordionPanelClick = (position: number) => () => {
//     const buttons = accordionRef.current?.querySelectorAll('button');
//     const contents =
//       accordionRef.current?.querySelectorAll('.accordion-content');

//     buttons!.forEach((button) => {
//       button.setAttribute('aria-expanded', 'false');
//     });

//     contents!.forEach((content) => {
//       content.setAttribute('aria-hidden', 'true');
//     });

//     buttons![position].setAttribute('aria-expanded', 'true');
//     contents![position].setAttribute('aria-hidden', 'false');
//   };

//   return (
//     <div className="accordion" ref={accordionRef}>
//       {data.map(({ title, imageUrl }, index) => (
//         <div
//           key={title}
//           className="accordion-panel"
//           onClick={onAccordionPanelClick(index)}
//         >
//           <button
//             className="accordion-trigger"
//             aria-controls={`panel${index}-content`}
//             aria-expanded="true"
//           ></button>
//           <div
//             className="accordion-content"
//             id="panel1-content"
//             aria-labelledby={`panel${index}-heading`}
//             aria-hidden="false"
//             role="region"
//           >
//             <h2>{title}</h2>
//             <img
//               className="accordion-image"
//               src={imageUrl}
//               alt="Accordion image"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

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
            aria-expanded="true"
            onClick={onAccordionPanelClick(index)}
          >
            ICON
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
