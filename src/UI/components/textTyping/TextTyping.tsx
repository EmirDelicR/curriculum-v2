import { CSSProperties, useEffect, useState } from 'react';
import './TextTyping.scss';

const WORDS = ['developer', 'engineer'];
const TIMING = 4000; // in milliseconds

export default function TextTyping() {
  const [position, setPosition] = useState(0);
  let timeout: ReturnType<typeof setInterval>;

  useEffect(() => {
    timeout = setInterval(() => {
      setPosition((prev) => {
        const position = prev + 1;
        if (position > WORDS.length - 1) {
          return 0;
        }
        return position;
      });
    }, TIMING);
    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div className="text-wrapper">
      <span className="main-text">I&rsquo;m a </span>
      <span
        className="typing-text"
        style={
          {
            '--timing': `${TIMING}ms`,
            '--steps': `${WORDS[position].length}`
          } as CSSProperties
        }
      >
        {WORDS[position]}
      </span>
    </div>
  );
}
