import { PropsWithChildren } from 'react';

import './AnimatedText.scss';

interface Props extends PropsWithChildren {
  isHeadline?: boolean;
}

export default function AnimatedText({ children, isHeadline = false }: Props) {
  if (isHeadline) {
    return <h1 className="animated-text">{children}</h1>;
  }

  return <p className="animated-text">{children}</p>;
}
