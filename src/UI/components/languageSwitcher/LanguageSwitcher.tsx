import { useTranslation } from 'react-i18next';

interface IUpdateData {
  lang: 'de' | 'en' | 'bs';
  side: 'right' | 'front' | 'back';
}

export default function LanguageSwitcher() {
  const {
    i18n: { changeLanguage }
  } = useTranslation();
  const updateLanguage = (data: IUpdateData) => {
    changeLanguage(data.lang);
    //   const showClass = `show-${data.side}`;
    //   if (this.currentClass !== '') {
    //     this.cube.classList.remove(this.currentClass);
    //   }
    //   this.cube.classList.add(showClass);
    //   this.currentClass = showClass;
  };

  return (
    <div className="language-wrapper">
      <div className="scene">
        <div className="cube">
          <div
            onClick={() => updateLanguage({ lang: 'de', side: 'right' })}
            className="cube__face cube__face--front"
          >
            EN
          </div>
          <div
            onClick={() => updateLanguage({ lang: 'en', side: 'front' })}
            className="cube__face cube__face--back"
          >
            BS
          </div>
          <div
            onClick={() => updateLanguage({ lang: 'bs', side: 'back' })}
            className="cube__face cube__face--right"
          >
            DE
          </div>
          <div className="cube__face cube__face--left">-</div>
          <div className="cube__face cube__face--top">-</div>
          <div className="cube__face cube__face--bottom">-</div>
        </div>
      </div>
    </div>
  );
}
