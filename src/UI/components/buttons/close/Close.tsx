import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import './Close.scss';

interface Props {
  onCloseClick: () => void;
}

export default function Close({ onCloseClick }: Props) {
  return (
    <FontAwesomeIcon
      className="close-button"
      icon={faCircleXmark}
      onClick={onCloseClick}
    />
  );
}
