import { useState } from 'react';
import { useBetween } from 'use-between';

export type SkillName =
  | 'Vue'
  | 'React'
  | 'VanillaJS'
  | 'TypeScript'
  | 'Scss'
  | 'Bootstrap'
  | 'Mantine'
  | 'Vuetify'
  | 'PWA'
  | 'Framework7'
  | 'Jest'
  | 'Cypress'
  | 'Node'
  | 'Python'
  | 'Express'
  | 'Django'
  | 'PostgreSQL'
  | 'MySQL'
  | 'GraphQL'
  | 'Firebase'
  | 'MongoDB'
  | 'Redis'
  | 'RabbitMQ'
  | 'ElasticSearch'
  | 'Docker'
  | 'WebSocket'
  | 'OAuth-JWT'
  | 'Linux'
  | 'Git'
  | 'BashScripting';

function useSkillType() {
  const [skillType, setSkillType] = useState<SkillName>('Vue');

  return {
    skillType,
    setSkillType
  };
}
const useShareSkillType = () => useBetween(useSkillType);

export default useShareSkillType;
