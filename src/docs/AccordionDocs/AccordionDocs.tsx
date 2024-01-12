import {
  Tab,
  TabList,
  TabPanel,
  TabPanelList,
  TabsManager,
  TsxHighLight,
  TsxPreview,
} from '@lib'

import basicExampleNode from './Accordion.basic.example'
import basicExampleCode from './Accordion.basic.example.tsx?raw'

import { component$ } from '@builder.io/qwik'

export const AccordionDocs = component$(() => {
  return (
    <article style={{ padding: '1rem' }}>
      <header>
        <h1>Accordion</h1>
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
                <TsxHighLight code={`
import { Accordion } from '@yucacodes/ui-react'"
                `} />
              </TabPanel>
              <TabPanel>
              <TsxHighLight code={`
import { Accordion } from '@yucacodes/ui-qwik'"
                `} />
              </TabPanel>
            </TabPanelList>
          </TabsManager>
        </figure>
      </section>
      <section>
        <h2>Basic Usage</h2>
        <p>Simply set open prop</p>
        <figure>
          <TsxPreview code={basicExampleCode}>{basicExampleNode}</TsxPreview>
        </figure>
      </section>
      <br />
    </article>
  )
})
