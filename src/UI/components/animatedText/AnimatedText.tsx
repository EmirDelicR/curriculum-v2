import { PropsWithChildren } from 'react';

import './AnimatedText.scss';

export default function AnimatedText({ children }: PropsWithChildren) {
  return <p className="animated-text">{children}</p>;
}
