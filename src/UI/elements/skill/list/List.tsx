import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import { SKILL_LIST_CONTENT } from '@/UI/elements/skill/data';
import useSharedCounter, {
  type SkillName
} from '@/UI/elements/skill/useSkillType';

import './List.scss';

type Item = { name: string; data: string[] };

function ListSegment({ item }: { item: Item }) {
  const { t } = useTranslation();
  const { skillType, setSkillType } = useSharedCounter();

  const onItemClickHandler = (element: string) => () => {
    setSkillType(element as SkillName);
  };

  return (
    <div className="skill-list-item">
      <p>{t(`skill-list.${item.name}`)}</p>
      <ul>
        {item.data.map((element) => (
          <li
            className={`${element === skillType ? 'active' : ''}`}
            key={element}
            onClick={onItemClickHandler(element)}
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface Props {
  type: 'frontend' | 'backend' | 'database' | 'utils';
}

export default function List({ type }: Props) {
  const content = SKILL_LIST_CONTENT[type];
  const { setSkillType } = useSharedCounter();

  useEffect(() => {
    setSkillType('Vue');
  }, []);

  return (
    <div className="skill-list">
      {content.map((item) => (
        <ListSegment item={item} key={item.name} />
      ))}
    </div>
  );
}
