import {
  Tab,
  TabList,
  TabPanel,
  TabPanelList,
  TabsManager,
  TsxHighLight,
  TsxPreview,
} from '@lib'

import basicExampleNode from './Resizable.basic.example'
import basicExampleCode from './Resizable.basic.example.tsx?raw'

import disabledExampleNode from './Resizable.disabled.example'
import disabledExampleCode from './Resizable.disabled.example.tsx?raw'

import onSizeChangeExampleNode from './Resizable.onSizeChange.qwik.example'
import onSizeChangeExampleCode from './Resizable.onSizeChange.qwik.example.tsx?raw'

import { component$ } from '@builder.io/qwik'

export const ResizableDocs = component$(() => {
  return (
    <article style={{ padding: '1rem' }}>
      <header>
        <h1>Resizable</h1>
        <p>
          Full reusable and deep customizable (With CSS variables) Resizable
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
                <TsxHighLight
                  code={`import { Resizable } from '@yucacodes/ui-react'"`}
                />
              </TabPanel>
              <TabPanel>
                <TsxHighLight
                  code={`import { Resizable } from '@yucacodes/ui-qwik'"`}
                />
              </TabPanel>
            </TabPanelList>
          </TabsManager>
        </figure>
      </section>
      <section>
        <h2>Basic Usage</h2>
        <p>Just use it</p>
        <figure>
          <TsxPreview code={basicExampleCode}>{basicExampleNode}</TsxPreview>
        </figure>
      </section>
      <section>
        <h2>Disabled </h2>
        <p></p>
        <figure>
          <TsxPreview code={disabledExampleCode}>
            {disabledExampleNode}
          </TsxPreview>
        </figure>
      </section>
      <section>
        <h2>On Size Change Callback </h2>
        <p></p>
        <figure>
          <TabsManager>
            <TabList>
              <Tab> React </Tab>
              <Tab> Qwik </Tab>
            </TabList>
            <TabPanelList>
              <TabPanel>
                <TsxHighLight code={``} />
              </TabPanel>
              <TabPanel>
                <TsxPreview code={onSizeChangeExampleCode}>
                  {onSizeChangeExampleNode}
                </TsxPreview>
              </TabPanel>
            </TabPanelList>
          </TabsManager>
        </figure>
      </section>
      <br />
    </article>
  )
})
