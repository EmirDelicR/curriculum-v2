import { useTranslation } from 'react-i18next';

import './LanguageSwitcher.scss';
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
    const showClass = `show-${data.side}`;
    if (currentClass !== '') {
      cubeRef.current?.classList?.remove(currentClass);
    }
    cubeRef.current?.classList?.add(showClass);
    setCurrentClass(showClass);
  };

  return (
    <div className="language-wrapper">
      <div ref={cubeRef} className="cube">
        <div
          onClick={() => updateLanguage({ lang: 'de', side: 'right' })}
          className="cube-face cube-face--front"
        >
          EN
        </div>
        <div
          onClick={() => updateLanguage({ lang: 'en', side: 'front' })}
          className="cube-face cube-face--back"
        >
          BS
        </div>
        <div
          onClick={() => updateLanguage({ lang: 'bs', side: 'back' })}
          className="cube-face cube-face--right"
        >
          DE
        </div>
        <div className="cube-face cube-face--left">-</div>
        <div className="cube-face cube-face--top">-</div>
        <div className="cube-face cube-face--bottom">-</div>
      </div>
    </div>
  );
}
