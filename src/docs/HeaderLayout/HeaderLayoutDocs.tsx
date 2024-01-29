import {
  Tab,
  TabList,
  TabPanel,
  TabPanelList,
  TabsManager,
  TsxHighLight,
  TsxPreview
} from '@yucacodes/ui-qwik'


import ExampleCode from './HeaderLayout.qwik.example'
import ExampleCodeQwik from './HeaderLayout.qwik.example?raw'

import { component$ } from '@builder.io/qwik'

export const HeaderLayoutDocs = component$(() => {
  return (
    <article style={{ padding: '1rem 0.8rem 3rem 0.8rem' }}>
      <header>
        <h1>Header Layout</h1>
        <p>
          Full reusable and deep customizable (With CSS variables) Button
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
                <TsxHighLight code="import { HeaderLayout } from '@yucacodes/ui-react'" />
              </TabPanel>
              <TabPanel>
                <TsxHighLight code="import { HeaderLayout } from '@yucacodes/ui-qwik'" />
              </TabPanel>
            </TabPanelList>
          </TabsManager>
        </figure>
      </section>
      <section>
        <h2>Basic Usage</h2>
        <p>Simply set open prop</p>
        <figure>
          <TabsManager>
            <TabList>
              <Tab> React </Tab>
              <Tab> Qwik </Tab>
            </TabList>
            <TabPanelList>
              <TabPanel>
                <TsxPreview code={ExampleCodeQwik}>
                  {ExampleCode}
                </TsxPreview>
              </TabPanel>
              <TabPanel>
                <TsxPreview code={ExampleCodeQwik}>
                  {ExampleCode}
                </TsxPreview>
              </TabPanel>
            </TabPanelList>
          </TabsManager>
        </figure>
      </section>
    </article>
  )
})
