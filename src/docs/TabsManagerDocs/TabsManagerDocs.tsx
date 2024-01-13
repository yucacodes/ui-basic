import {
  Tab,
  TabList,
  TabPanel,
  TabPanelList,
  TabsManager,
  TsxHighLight,
  TsxPreview,
} from '@yucacodes/ui-qwik'

import basicExampleNode from './TabsManager.basic.example'
import basicExampleCode from './TabsManager.basic.example.tsx?raw'

import { component$ } from '@builder.io/qwik'

export const TabsManagerDocs = component$(() => {
  return (
    <article style={{padding: "1rem 0.8rem 3rem 0.8rem"}}>
      <header>
        <h1>TabsManager</h1>
        <p>
          Full reusable and deep customizable (With CSS variables) Tabs manager
          component. Require zero initial configuration, but is easily
          integrable with an app theme.
        </p>
      </header>
      <section>
        <h2>Import</h2>
        <p>import from the corresponding package according to your framework</p>
        <figure>
          <TabsManager>
            <TabList>
              <Tab> React </Tab>
              <Tab> Qwik </Tab>
            </TabList>
            <TabPanelList>
              <TabPanel>
                <TsxHighLight code={`
import { 
  TabsManager,
  TabList,
  TabPanelList,
  Tab,
  TabPanel,
} from '@yucacodes/ui-react'"
                `} />
              </TabPanel>
              <TabPanel>
              <TsxHighLight code={`
import { 
  TabsManager,
  TabList,
  TabPanelList,
  Tab,
  TabPanel,
} from '@yucacodes/ui-qwik'"
                `} />
              </TabPanel>
            </TabPanelList>
          </TabsManager>
        </figure>
      </section>
      <section>
        <h2>Basic Usage</h2>
        <p>Simply add your tabs and panels</p>
        <figure>
          <TsxPreview code={basicExampleCode}>{basicExampleNode}</TsxPreview>
        </figure>
      </section>
      <br />
    </article>
  )
})
