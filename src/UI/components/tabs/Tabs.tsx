import { MouseEvent, ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';

import './Tabs.scss';
import { classNameHelper } from '@/utils/generalHelpers';

interface Props {
  items: { name: string; content: ReactNode }[];
  isVertical?: boolean;
}

export default function Tabs({ items, isVertical = false }: Props) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(items[0].name);

  const onTabClickHandler =
    (tabName: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      setActiveTab(tabName);
    };

  return (
    <div className={classNameHelper('tab', isVertical ? 'vertical' : '')}>
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
