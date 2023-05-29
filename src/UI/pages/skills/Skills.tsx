import Tabs from '@/UI/components/tabs/Tabs';

import List from '@/UI/elements/skill/list/List';
import Description from '@/UI//elements/skill/description/Description';
import Graph from '@/UI//elements/skill/graph/Graph';

import './Skills.scss';

const SKILL_LIST = [
  {
    name: 'frontend',
    content: <List type="frontend" />
  },
  {
    name: 'backend',
    content: <List type="backend" />
  },
  {
    name: 'database',
    content: <List type="database" />
  },
  {
    name: 'utils',
    content: <List type="utils" />
  }
];

const SKILL_DESCRIPTION = [
  {
    name: 'description',
    content: <Description />
  },
  {
    name: 'visual',
    content: <Graph />
  }
];

export default function Skills() {
  return (
    <div className="skill-page">
      <div className="skill-list-wrapper">
        <Tabs items={SKILL_LIST} isVertical={true} />
      </div>
      <div className="skill-description-wrapper">
        <Tabs items={SKILL_DESCRIPTION} />
      </div>
    </div>
  );
}
