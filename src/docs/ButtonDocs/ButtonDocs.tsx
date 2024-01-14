import {
  Tab,
  TabList,
  TabPanel,
  TabPanelList,
  TabsManager,
  TsxHighLight,
  TsxPreview,
} from '@yucacodes/ui-qwik'

import variantExampleNode from './Button.variant.example'
import variantExampleCode from './Button.variant.example.tsx?raw'

import themeColorExampleNode from './Button.themeColor.example'
import themeColorExampleCode from './Button.themeColor.example.tsx?raw'

import customColorExampleNode from './Button.customColor.example'
import customColorExampleCode from './Button.customColor.example.tsx?raw'

import controlsExampleNode from './Button.controls.example'
import controlsExampleCode from './Button.controls.example.tsx?raw'

import sizeExampleNode from './Button.size.example'
import sizeExampleCode from './Button.size.example.tsx?raw'

import cssVariablesExampleNode from './Button.cssVariables.example.tsx/Button.cssVariables.example'
import cssVariablesExampleCode from './Button.cssVariables.example.tsx/Button.cssVariables.example.tsx?raw'
import cssVariablesExampleCssCode from './Button.cssVariables.example.tsx/styles.module.css?raw'

import { component$ } from '@builder.io/qwik'

export const ButtonDocs = component$(() => {
  return (
    <article style={{ padding: '1rem 0.8rem 3rem 0.8rem' }}>
      <header>
        <h1>Button</h1>
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
                <TsxHighLight code="import { Button } from '@yucacodes/ui-react'" />
              </TabPanel>
              <TabPanel>
                <TsxHighLight code="import { Button } from '@yucacodes/ui-qwik'" />
              </TabPanel>
            </TabPanelList>
          </TabsManager>
        </figure>
      </section>
      <section>
        <h2>Variants</h2>
        <p>The Button have three variants</p>
        <figure>
          <TsxPreview code={variantExampleCode}>
            {variantExampleNode}
          </TsxPreview>
        </figure>
      </section>
      <br />
      <section>
        <h2>Theme colors</h2>
        <p>The Button comes with seven options of theme defined colors</p>
        <figure>
          <TsxPreview code={themeColorExampleCode}>
            {themeColorExampleNode}
          </TsxPreview>
        </figure>
      </section>
      <br />
      <section>
        <h2>Custom colors</h2>
        <p>
          Custom color works with hexadecimal format or with an RGB object. The
          contrast color is set automatically.
        </p>
        <figure>
          <TsxPreview code={customColorExampleCode}>
            {customColorExampleNode}
          </TsxPreview>
        </figure>
      </section>
      <br />
      <section>
        <h2>Controls</h2>
        <p>
          Controll the behavior of Button on various situations like disabled or
          loading.
        </p>
        <figure>
          <TsxPreview code={controlsExampleCode}>
            {controlsExampleNode}
          </TsxPreview>
        </figure>
      </section>
      <br />
      <section>
        <h2>Size</h2>
        <p>
          Controll the size of the button, default size is equals to font-size
        </p>
        <figure>
          <TsxPreview code={sizeExampleCode}>{sizeExampleNode}</TsxPreview>
        </figure>
      </section>
      <section>
        <h2>CSS Variables</h2>
        <p>
          Button component allows customization using css variables. 
          In the following example we define a customization for all the buttons in a div
        </p>
        <figure>
          <TsxHighLight code={cssVariablesExampleCssCode} />
        </figure>
        <figure>
          <TsxPreview code={cssVariablesExampleCode}>
            {cssVariablesExampleNode}
          </TsxPreview>
        </figure>
      </section>
    </article>
  )
})
