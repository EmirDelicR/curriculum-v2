import { useTranslation } from 'react-i18next';

import classes from './LanguageSwitcher.module.scss';
import { useRef, useState } from 'react';

interface IUpdateData {
  lang: 'de' | 'en' | 'bs';
  side: 'right' | 'front' | 'back';
}

export default function LanguageSwitcher() {
  const cubeRef = useRef<HTMLDivElement>(null);
  const [currentClass, setCurrentClass] = useState('');
  const {
    i18n: { changeLanguage }
  } = useTranslation();
  const updateLanguage = (data: IUpdateData) => {
    changeLanguage(data.lang);
    const showClass = `${classes[`show-${data.side}`]}`;
    if (currentClass !== '') {
      cubeRef.current?.classList?.remove(currentClass);
    }
    cubeRef.current?.classList?.add(showClass);
    setCurrentClass(showClass);
  };

  return (
    <div className={classes['language-wrapper']}>
      <div ref={cubeRef} className={classes.cube}>
        <div
          onClick={() => updateLanguage({ lang: 'de', side: 'right' })}
          className={`${classes['cube-face']} ${classes['cube-face--front']}`}
        >
          EN
        </div>
        <div
          onClick={() => updateLanguage({ lang: 'en', side: 'front' })}
          className={`${classes['cube-face']} ${classes['cube-face--back']}`}
        >
          BS
        </div>
        <div
          onClick={() => updateLanguage({ lang: 'bs', side: 'back' })}
          className={`${classes['cube-face']} ${classes['cube-face--right']}`}
        >
          DE
        </div>
        <div
          className={`${classes['cube-face']} ${classes['cube-face--left']}`}
        >
          -
        </div>
        <div className={`${classes['cube-face']} ${classes['cube-face--top']}`}>
          -
        </div>
        <div
          className={`${classes['cube-face']} ${classes['cube-face--bottom']}`}
        >
          -
        </div>
      </div>
    </div>
  );
}
