import { CSSProperties } from 'react';

import './Close.scss';

interface Props {
  onCloseClick: () => void;
  displayTypeOnBigScreen?: 'none' | 'block';
}

export default function Close({
  onCloseClick,
  displayTypeOnBigScreen = 'none'
}: Props) {
  return (
    <div
      className="close-button"
      aria-label="close-button"
      onClick={onCloseClick}
      style={{ '--display-type': displayTypeOnBigScreen } as CSSProperties}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <svg viewBox="0 0 36 36" className="circle">
        <path
          strokeDasharray="100, 100"
          d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </div>
  );
}
