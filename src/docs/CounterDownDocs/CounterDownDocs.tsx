import {
  Tab,
  TabList,
  TabPanel,
  TabPanelList,
  TabsManager,
  TsxHighLight,
  TsxPreview,
} from '@yucacodes/ui-qwik'

import basicExampleNode from './CounterDown.example.qwik'
import basicExampleCode from './CounterDown.example.qwik.tsx?raw'

import basicReactExampleNode  from './CounterDown.example.react.js'
import basicReactExampleCode from './CounterDown.example.react.tsx?raw'

import { component$ } from '@builder.io/qwik'

export const CounterDownDocs = component$(() => {
  return (
    <article style={{padding: "1rem 0.8rem 3rem 0.8rem"}}>
      <header>
        <h1>Counter Down</h1>
        <p>
          Full reusable and deep customizable (With CSS variables) Accordion
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
                <TsxHighLight code={`import { CounterDown } from '@yucacodes/ui-react'"`} />
              </TabPanel>
              <TabPanel>
              <TsxHighLight code={`import { CounterDown } from '@yucacodes/ui-qwik'"`} />
              </TabPanel>
            </TabPanelList>
          </TabsManager>
        </figure>
      </section>
      <section>
        <h2>Basic Usage</h2>
        <p>Simply set open prop</p>
        <TabsManager>
            <TabList>
              <Tab> React </Tab>
              <Tab> Qwik </Tab>
            </TabList>
            <TabPanelList>
              <TabPanel>
              <figure>
          <TsxPreview code={basicExampleCode}>{basicExampleNode}</TsxPreview>
        </figure>
              </TabPanel>
              <TabPanel>
              <figure>
          <TsxPreview code={basicExampleCode}>{basicExampleNode}</TsxPreview>
        </figure>
              </TabPanel>
            </TabPanelList>
          </TabsManager>
        
      </section>
      <br />
    </article>
  )
})
