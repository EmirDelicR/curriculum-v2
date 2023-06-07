import { useState } from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { classNameHelper } from '@/utils/generalHelpers';

import './ToggleMode.scss';

interface Props {
  onClick: () => void;
}

export default function ToggleMode({ onClick }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const onClickHandler = () => {
    setIsDarkMode((prev) => !prev);
    onClick();
  };

  return (
    <div className="mode">
      <div
        className={classNameHelper('icon-wrapper', isDarkMode ? 'dark' : '')}
      >
        <FontAwesomeIcon
          className="mode-icon sun"
          icon={faSun}
          size="2x"
          onClick={onClickHandler}
        />
        <FontAwesomeIcon
          className="mode-icon moon"
          icon={faMoon}
          size="2x"
          onClick={onClickHandler}
        />
      </div>
    </div>
  );
}
