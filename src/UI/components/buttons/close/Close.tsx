import { CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

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
    <button
      aria-label="close-button"
      onClick={onCloseClick}
      className="close-button"
    >
      <FontAwesomeIcon
        style={{ '--display-type': displayTypeOnBigScreen } as CSSProperties}
        icon={faCircleXmark}
      />
    </button>
  );
}
