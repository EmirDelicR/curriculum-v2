import { useTranslation } from 'react-i18next';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend
} from 'recharts';

import Close from '@/UI/components/buttons/close/Close';

import { OPTION_DATA } from '@/UI/elements/skill/data';
import useShareSkillType from '@/UI/elements/skill/useSkillType';

const TRANSLATE_ITEMS = ['speed', 'knowledge', 'level', 'enjoy', 'comfort'];

import './Graph.scss';

export default function Graph() {
  const { t } = useTranslation();
  const { skillType, setShowSkill } = useShareSkillType();
  const { data, name } = OPTION_DATA[skillType].visual;

  const updatedData = TRANSLATE_ITEMS.map((item, index) => ({
    points: t(`graph-labels.${item}`),
    position: data[index]
  }));

  return (
    <>
      <div className="graph-header">
        <Close onCloseClick={() => setShowSkill(false)} />
        <span>{name}</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={updatedData}>
          <PolarGrid stroke="var(--main-color)" />
          <PolarAngleAxis
            tick={{ fill: 'var(--main-color)' }}
            tickLine={{ stroke: 'var(--none)' }}
            dataKey="points"
            stroke="var(--main-color)"
          />
          <PolarRadiusAxis
            stroke="var(--main-color)"
            angle={90}
            tick={{ fill: 'var(--main-color)', fillOpacity: 0.3 }}
            orientation="middle"
            dy={25}
            domain={[0, 100]}
          />
          <Radar
            name={`${t('graph-labels.overview')}`}
            dataKey="position"
            stroke="var(--nav-link-hover)"
            fill="var(--nav-link-hover)"
            fillOpacity={0.3}
          />
          <Legend align="left" iconSize={16} iconType="triangle" />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
}
