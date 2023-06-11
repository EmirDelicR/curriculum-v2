import { useTranslation } from 'react-i18next';
import { Tree, TreeNode } from 'react-organizational-chart';
import { PropsWithChildren } from 'react';

import Tabs from '@/UI/components/tabs/Tabs';
import GeneralLink from '@/UI/components/links/generalLink/GeneralLink';

import './Tips.scss';

function RoadMapLink() {
  const { t } = useTranslation();
  return (
    <GeneralLink
      linkClass="title"
      navigateTo="https://github.com/kamranahmedse/developer-roadmap"
    >
      {t('tips.learn')}
    </GeneralLink>
  );
}

function TreeElement({ text }: { text: string }) {
  return <span className="tree-node">{text}</span>;
}

interface TreeRootProps extends PropsWithChildren {
  rootText: string;
}

function TreeRoot({ rootText, children }: TreeRootProps) {
  return (
    <Tree
      lineWidth="1px"
      lineColor="#366194"
      lineHeight="2rem"
      lineBorderRadius="10px"
      lineStyle="double"
      label={<TreeElement text={rootText} />}
    >
      {children}
    </Tree>
  );
}

function FrontEndTree() {
  return (
    <TreeRoot rootText="HTML">
      <TreeNode label={<TreeElement text="CSS" />}>
        <TreeNode label={<TreeElement text="SASS/SCSS" />} />
        <TreeNode label={<TreeElement text="Flex/Grid" />} />
      </TreeNode>

      <TreeNode label={<TreeElement text="Java Script" />}>
        <TreeNode label={<TreeElement text="Npm, Vite" />}>
          <TreeNode label={<TreeElement text="Type Script" />}>
            <TreeNode label={<TreeElement text="Framework" />}>
              <TreeNode label={<TreeElement text="Vue.js" />} />
              <TreeNode label={<TreeElement text="React.js" />} />
              <TreeNode label={<TreeElement text="Server" />}>
                <TreeNode label={<TreeElement text="Nuxt.js" />} />
                <TreeNode label={<TreeElement text="Next.js" />} />
              </TreeNode>
              <TreeNode label={<TreeElement text="Desktop" />}>
                <TreeNode label={<TreeElement text="Electron" />} />
              </TreeNode>
              <TreeNode label={<TreeElement text="Mobile" />}>
                <TreeNode label={<TreeElement text="React Native" />} />
                <TreeNode label={<TreeElement text="PWA" />} />
              </TreeNode>
            </TreeNode>
          </TreeNode>
        </TreeNode>
      </TreeNode>
    </TreeRoot>
  );
}

function BackEndTree() {
  return (
    <TreeRoot rootText="Terminal">
      <TreeNode label={<TreeElement text="Programs" />}>
        <TreeNode label={<TreeElement text="Node.js" />}>
          <TreeNode label={<TreeElement text="Express" />} />
        </TreeNode>
        <TreeNode label={<TreeElement text="Python" />}>
          <TreeNode label={<TreeElement text="Django" />} />
        </TreeNode>
        <TreeNode label={<TreeElement text="Java" />}>
          <TreeNode label={<TreeElement text="Spring" />} />
        </TreeNode>
      </TreeNode>
      <TreeNode label={<TreeElement text="Database" />}>
        <TreeNode label={<TreeElement text="Sql" />}>
          <TreeNode label={<TreeElement text="PostgreSql" />} />
          <TreeNode label={<TreeElement text="MySql" />} />
        </TreeNode>
        <TreeNode label={<TreeElement text="NoSql" />}>
          <TreeNode label={<TreeElement text="Firebase" />} />
          <TreeNode label={<TreeElement text="MongoDB" />} />
          <TreeNode label={<TreeElement text="GraphQL" />} />
        </TreeNode>
      </TreeNode>
    </TreeRoot>
  );
}

function UtilityTree() {
  return (
    <TreeRoot rootText="Docker">
      <TreeNode label={<TreeElement text="Redis" />} />
      <TreeNode label={<TreeElement text="RabbitMq" />}>
        <TreeNode label={<TreeElement text="Auth" />}>
          <TreeNode label={<TreeElement text="OAuth" />} />
          <TreeNode label={<TreeElement text="JWT" />} />
        </TreeNode>
        <TreeNode label={<TreeElement text="Web Servers" />}>
          <TreeNode label={<TreeElement text="Apache" />} />
          <TreeNode label={<TreeElement text="Nginx" />} />
        </TreeNode>
        <TreeNode label={<TreeElement text="Testing" />}>
          <TreeNode label={<TreeElement text="Jest" />} />
          <TreeNode label={<TreeElement text="Cypress" />} />
          <TreeNode label={<TreeElement text="Selenium" />} />
        </TreeNode>
      </TreeNode>
      <TreeNode label={<TreeElement text="Elastic Search" />} />
    </TreeRoot>
  );
}

function TabContent({ children }: PropsWithChildren) {
  return (
    <>
      <RoadMapLink />
      <div className="tree-wrapper">
        <div className="backdrop"></div>
        {children}
      </div>
    </>
  );
}

export default function Tips() {
  return (
    <div className="tips-page">
      <Tabs
        items={[
          {
            name: 'frontend',
            content: (
              <TabContent>
                <FrontEndTree />
              </TabContent>
            )
          },
          {
            name: 'backend',
            content: (
              <TabContent>
                <BackEndTree />
              </TabContent>
            )
          },
          {
            name: 'utils',
            content: (
              <TabContent>
                <UtilityTree />
              </TabContent>
            )
          }
        ]}
      />
    </div>
  );
}
