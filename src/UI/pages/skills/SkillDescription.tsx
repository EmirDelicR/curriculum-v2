import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  content: {
    name: string;
    data: {
      icon: ReactNode;
      link: string;
      description: string;
    };
  };
}

export default function SkillDescription({ content: { name, data } }: Props) {
  const { t } = useTranslation();

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
