import { useTranslation } from 'react-i18next';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';

const translateData = ['speed', 'knowledge', 'level', 'enjoy', 'comfort'];
const data = [85, 80, 70, 90, 80];

export default function SkillGraph() {
  const { t } = useTranslation();
  const updatedData = translateData.map((item, index) => ({
    points: t(`graph-labels.${item}`),
    position: data[index]
  }));

  return (
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
          name="Mike"
          dataKey="position"
          stroke="var(--nav-link-hover)"
          fill="var(--nav-link-hover)"
          fillOpacity={0.3}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
