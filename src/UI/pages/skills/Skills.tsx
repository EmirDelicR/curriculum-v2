import Tabs from '@/UI/components/tabs/Tabs';

import SkillList from './SkillList';
import SkillDescription from './SkillDescription';
import SkillGraph from './SkillGraph';

import './Skills.scss';

const SKILL_LIST = [
  {
    name: 'frontend',
    content: <SkillList type="frontend" />
  },
  {
    name: 'backend',
    content: <SkillList type="backend" />
  },
  {
    name: 'database',
    content: <SkillList type="database" />
  },
  {
    name: 'utils',
    content: <SkillList type="utils" />
  }
];

const SKILL_DESCRIPTION = [
  {
    name: 'description',
    content: <SkillDescription />
  },
  {
    name: 'visual',
    content: <SkillGraph />
  }
];

export default function Skills() {
  return (
    <div className="skill-page">
      <div className="skill-list-wrapper">
        <Tabs items={SKILL_LIST} />
      </div>
      <div className="skill-description-wrapper">
        <Tabs items={SKILL_DESCRIPTION} />
      </div>
    </div>
  );
}
