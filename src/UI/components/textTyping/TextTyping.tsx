import { ReactTyped } from 'react-typed';

import './TextTyping.scss';

const WORDS = ['developer', 'engineer'];

export default function TextTyping() {
  return (
    <div className="text-wrapper">
      <span className="main-text">I&rsquo;m a </span>
      <ReactTyped
        className="typing-text"
        startWhenVisible
        strings={WORDS}
        typeSpeed={100}
        backSpeed={50}
        loop
      />
    </div>
  );
}
