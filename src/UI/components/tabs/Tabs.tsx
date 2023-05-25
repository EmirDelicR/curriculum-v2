import { MouseEvent, ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';

import './Tabs.scss';

interface Props {
  items: { name: string; content: ReactNode }[];
}

export default function Tabs({ items }: Props) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(items[0].name);

  const onTabClickHandler =
    (tabName: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      setActiveTab(tabName);
    };

  return (
    <div className="tab">
      <div className="tab-list">
        {items.map((item) => (
          <a
            className={item.name === activeTab ? 'active' : ''}
            key={`${item.name}-tab`}
            onClick={onTabClickHandler(item.name)}
          >
            {t(`tabs-name.${item.name}`)}
          </a>
        ))}
      </div>
      <div className="tab-body">
        {items.map((item) => (
          <div
            className={`tab-content ${item.name === activeTab ? 'active' : ''}`}
            key={`${item.name}-content`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
