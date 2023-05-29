import { useTranslation } from 'react-i18next';
import { OPTION_DATA } from './data';
import useSharedCounter from './useSkillType';

export default function SkillDescription() {
  const { t } = useTranslation();
  const { skillType } = useSharedCounter();
  const { name, data } = OPTION_DATA[skillType].description;

  return (
    <div className="skill-option-description">
      <div className="header">
        {/* <i :class="getInnerData.icon"></i> */}
        <span className="language-cour">{name}</span>
      </div>
      <div className="description">
        {t(`skill-description.${data.description}`)}
      </div>
      <div className="link-skill-desc">
        <p>{t('skill-description.link')}</p>
        <a
          target="_blank"
          className="language-cour"
          href={data.link}
          rel="noreferrer"
        >
          {name}
        </a>
      </div>
    </div>
  );
}
