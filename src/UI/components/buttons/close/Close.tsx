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
    <FontAwesomeIcon
      className="close-button"
      style={{ '--display-type': displayTypeOnBigScreen } as CSSProperties}
      icon={faCircleXmark}
      onClick={onCloseClick}
    />
  );
}
