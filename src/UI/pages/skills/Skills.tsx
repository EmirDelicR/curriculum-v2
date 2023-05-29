import Tabs from '@/UI/components/tabs/Tabs';

import { OPTION_DATA, SKILL_LIST_CONTENT } from './data';
import SkillListContent from './SkillList';

import './Skills.scss';
import SkillDescription from './SkillDescription';
import SkillGraph from './SkillGraph';

const SKILL_LIST = [
  {
    name: 'frontend',
    content: <SkillListContent content={SKILL_LIST_CONTENT.frontend} />
  },
  {
    name: 'backend',
    content: <SkillListContent content={SKILL_LIST_CONTENT.backend} />
  },
  {
    name: 'database',
    content: <SkillListContent content={SKILL_LIST_CONTENT.database} />
  },
  {
    name: 'utils',
    content: <SkillListContent content={SKILL_LIST_CONTENT.utils} />
  }
];

const SKILL_DESCRIPTION = [
  {
    name: 'description',
    content: <SkillDescription content={OPTION_DATA['Vue'].description} />
  },
  {
    name: 'visual',
    content: <SkillGraph visual={OPTION_DATA['Vue'].visual} />
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
