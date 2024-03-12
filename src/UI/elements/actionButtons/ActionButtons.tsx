import LanguageSwitcher from '@/UI/components/buttons/languageSwitcher/LanguageSwitcher';
import PwaInstall from '@/UI/components/buttons/pwaInstall/PwaInstall';
import ToggleMode from '@/UI/components/buttons/toggleMode/ToggleMode';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ActionButtons.scss';
import { useState } from 'react';
import { classNameHelper } from '@/utils/generalHelpers';

interface Props {
  toggleAction: () => void;
}

export default function ActionButtons({ toggleAction }: Props) {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive((prev) => !prev);
  };

  const wrapperClass = classNameHelper(
    'action-buttons-wrapper',
    isActive ? 'mobile-active' : ''
  );
  return (
    <>
      <button className="btn" onClick={toggleActiveClass}>
        +
      </button>
      <FontAwesomeIcon
        className="tool-icon"
        icon={faPlusCircle}
        size="2x"
        onClick={toggleActiveClass}
      />
      <div className={wrapperClass}>
        <LanguageSwitcher />
        <PwaInstall />
        <ToggleMode onClick={toggleAction} />
      </div>
    </>
  );
}
