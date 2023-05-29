import { useTranslation } from 'react-i18next';
import { SKILL_LIST_CONTENT } from '../data';
import useSharedCounter, { SkillName } from '../../useSkillType';
import { useEffect } from 'react';

type Item = { name: string; data: string[] };

function ListSegment({ item }: { item: Item }) {
  const { t } = useTranslation();
  const { setSkillType } = useSharedCounter();

  const onItemClickHandler = (element: string) => () => {
    setSkillType(element as SkillName);
  };

  return (
    <div className="description-tab-content">
      <p>{t(`skill-list.${item.name}`)}</p>
      <ul>
        {item.data.map((element) => (
          <li key={element} onClick={onItemClickHandler(element)}>
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
    <div>
      {content.map((item) => (
        <ListSegment item={item} key={item.name} />
      ))}
    </div>
  );
}
