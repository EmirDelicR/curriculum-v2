import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { OPTION_DATA } from '@/UI/elements/skill/data';
import useShareSkillType from '@/UI/elements/skill/useSkillType';

import './Description.scss';
import Close from '@/UI/components/buttons/close/Close';

export default function Description() {
  const { t } = useTranslation();
  const { skillType, setShowSkill } = useShareSkillType();
  const { name, data } = OPTION_DATA[skillType].description;

  return (
    <div className="skill-description">
      <Close onCloseClick={() => setShowSkill(false)} />
      <div className="header">
        <FontAwesomeIcon icon={data.icon as IconProp} />
        <span>{name}</span>
      </div>
      <div className="content">
        {t(`skill-description.${data.description}`)}
      </div>
      <div className="footer">
        <p>{t('skill-description.link')}</p>
        <a target="_blank" href={data.link} rel="noreferrer">
          {name}
        </a>
      </div>
    </div>
  );
}
