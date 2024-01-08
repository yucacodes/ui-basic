import { Tab, TabList, TabPanel, TabsManager, TsxPreview } from '@lib'

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
import { component$ } from '@builder.io/qwik'

export const ButtonDocs = component$(() => {
  return (
    <article>
      <header>
        <h1>Button</h1>
        <p>
          Full reusable and deep customizable (With CSS variables) Button
          component.
          <br /> <br />
          Require zero initial configuration, but is easily integrable with an
          app theme.
        </p>
      </header>
      <section>
        <TabsManager selected={1}>
          <TabList>
            <Tab> One </Tab>
            <Tab> Two </Tab>
            <Tab> Three </Tab>
            <Tab> Four </Tab>
          </TabList>

          <TabPanel>1</TabPanel>
          <TabPanel>2</TabPanel>
          <TabPanel>3</TabPanel>
          <TabPanel>4</TabPanel>
        </TabsManager>
      </section>
      <section>
        <h2>Variants</h2>
        <p>The Button comes have three variants</p>
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
    </article>
  )
})
