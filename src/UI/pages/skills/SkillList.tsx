import { useTranslation } from 'react-i18next';

type Item = { name: string; data: string[] };

function ListSegment({ item }: { item: Item }) {
  const { t } = useTranslation();

  return (
    <div className="description-tab-content">
      <p>{t(`skill-list.${item.name}`)}</p>
      <ul>
        {item.data.map((element) => (
          <li key={element} onClick={() => console.log(element)}>
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function List({ content }: { content: Item[] }) {
  return (
    <div>
      {content.map((item) => (
        <ListSegment item={item} key={item.name} />
      ))}
    </div>
  );
}
