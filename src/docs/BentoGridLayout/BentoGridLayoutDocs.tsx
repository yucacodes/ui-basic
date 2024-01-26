import {
  Tab,
  TabList,
  TabPanel,
  TabPanelList,
  TabsManager,
  TsxHighLight,
  TsxPreview,
} from '@yucacodes/ui-qwik'

import basicExampleNode from './BentoGridLayout.basic.example'
import basicExamplecode from './BentoGridLayout.basic.example?raw'

import { component$ } from '@builder.io/qwik'

export const BentoGridLayoutDocs = component$(() => {
  return (
    <article style={{padding: "1rem 0.8rem 3rem 0.8rem"}}>
      <header>
        <h1>Bento Grid Layout</h1>
        <p>
         Layout like Bento Grid Layout with responsive layout with 12 columns
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
                <TsxHighLight code={`import { BentoGridLayout } from '@yucacodes/ui-react'"`} />
              </TabPanel>
              <TabPanel>
              <TsxHighLight code={`import { BentoGridLayout } from '@yucacodes/ui-qwik'"`} />
              </TabPanel>
            </TabPanelList>
          </TabsManager>
        </figure>
      </section>
      <section>
        <h2>Basic Usage</h2>
        <p>Simply set open prop</p>
        <figure>
          <TsxPreview code={basicExamplecode}>{basicExampleNode}</TsxPreview>
        </figure>
      </section>
      <br />
    </article>
  )
})
