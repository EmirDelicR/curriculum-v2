import { useTranslation } from 'react-i18next';
import { Tree, TreeNode } from 'react-organizational-chart';

import Tabs from '@/UI/components/tabs/Tabs';

function RoadMapLink() {
  const { t } = useTranslation();
  return (
    <div className="title">
      <a
        href="https://github.com/kamranahmedse/developer-roadmap"
        target="_blank"
        rel="noreferrer"
      >
        {t('tips.learn')}
      </a>
    </div>
  );
}

function FrontEndTree() {
  return (
    <Tree
      lineWidth={'2px'}
      lineColor={'green'}
      lineBorderRadius={'10px'}
      label={<span>HTML</span>}
    >
      <TreeNode label={<span>CSS</span>}>
        <TreeNode label={<span>SASS/SCSS</span>} />
        <TreeNode label={<span>Flex/Grid</span>} />
      </TreeNode>

      <TreeNode label={<span>Java Script</span>}>
        <TreeNode label={<span>Npm, Vite</span>}>
          <TreeNode label={<span>Type Script</span>}>
            <TreeNode label={<span>Framework</span>}>
              <TreeNode label={<span>Vue.js</span>} />
              <TreeNode label={<span>React.js</span>} />
              <TreeNode label={<span>Server</span>}>
                <TreeNode label={<span>Nuxt.js</span>} />
                <TreeNode label={<span>Next.js</span>} />
              </TreeNode>
              <TreeNode label={<span>Desktop</span>}>
                <TreeNode label={<span>Electron</span>} />
              </TreeNode>
              <TreeNode label={<span>Mobile</span>}>
                <TreeNode label={<span>React Native</span>} />
                <TreeNode label={<span>PWA</span>} />
              </TreeNode>
            </TreeNode>
          </TreeNode>
        </TreeNode>
      </TreeNode>
    </Tree>
  );
}

function BackEndTree() {
  return (
    <Tree
      lineWidth={'2px'}
      lineColor={'green'}
      lineBorderRadius={'10px'}
      label={<span>Terminal</span>}
    >
      <TreeNode label={<span>Programs</span>}>
        <TreeNode label={<span>Node.js</span>}>
          <TreeNode label={<span>Express</span>} />
        </TreeNode>
        <TreeNode label={<span>Python</span>}>
          <TreeNode label={<span>Django</span>} />
        </TreeNode>
        <TreeNode label={<span>Java</span>}>
          <TreeNode label={<span>Spring</span>} />
        </TreeNode>
      </TreeNode>

      <TreeNode label={<span>Database</span>}>
        <TreeNode label={<span>Sql</span>}>
          <TreeNode label={<span>PostgreSql</span>} />
          <TreeNode label={<span>MySql</span>} />
        </TreeNode>
        <TreeNode label={<span>NoSql</span>}>
          <TreeNode label={<span>Firebase</span>} />
          <TreeNode label={<span>MongoDB</span>} />
          <TreeNode label={<span>GraphQL</span>} />
        </TreeNode>
      </TreeNode>
    </Tree>
  );
}

function UtilityTree() {
  return (
    <Tree
      lineWidth={'2px'}
      lineColor={'green'}
      lineBorderRadius={'10px'}
      label={<span>Docker</span>}
    >
      <TreeNode label={<span>Redis</span>} />
      <TreeNode label={<span>RabbitMq</span>}>
        <TreeNode label={<span>Auth</span>}>
          <TreeNode label={<span>OAuth</span>} />
          <TreeNode label={<span>JWT</span>} />
        </TreeNode>
        <TreeNode label={<span>Web Servers</span>}>
          <TreeNode label={<span>Apache</span>} />
          <TreeNode label={<span>Nginx</span>} />
        </TreeNode>
        <TreeNode label={<span>Testing</span>}>
          <TreeNode label={<span>Jest</span>} />
          <TreeNode label={<span>Cypress</span>} />
          <TreeNode label={<span>Selenium</span>} />
        </TreeNode>
      </TreeNode>
      <TreeNode label={<span>Elastic Search</span>} />
    </Tree>
  );
}

function FrontEndRoadMap() {
  return (
    <>
      <RoadMapLink />
      <FrontEndTree />
    </>
  );
}

function BackEndRoadMap() {
  return (
    <>
      <RoadMapLink />
      <BackEndTree />
    </>
  );
}

function UtilityRoadMap() {
  return (
    <>
      <RoadMapLink />
      <UtilityTree />
    </>
  );
}

export default function Tips() {
  return (
    <Tabs
      items={[
        { name: 'frontend', content: <FrontEndRoadMap /> },
        { name: 'backend', content: <BackEndRoadMap /> },
        { name: 'utils', content: <UtilityRoadMap /> }
      ]}
    />
  );
}
