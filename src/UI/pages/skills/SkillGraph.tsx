import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    points: 'Speed',
    position: 100
  },
  {
    points: 'Knowledge',
    position: 98
  },
  {
    points: 'Level',
    position: 86
  },
  {
    points: 'Enjoyment',
    position: 59
  },
  {
    points: 'Comfort',
    position: 85
  }
];
export default function SkillGraph() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
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
