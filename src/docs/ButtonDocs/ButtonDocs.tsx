import { CodeViewer } from '../../components/CodeViewer/CodeViewer'

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

export function ButtonDocs() {
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
        <h2>Variants</h2>
        <p>The Button comes have three variants</p>
        <figure>
          <CodeViewer code={variantExampleCode} node={variantExampleNode} />
        </figure>
      </section>
      <br />
      <section>
        <h2>Theme colors</h2>
        <p>The Button comes with seven options of theme defined colors</p>
        <figure>
          <CodeViewer
            code={themeColorExampleCode}
            node={themeColorExampleNode}
          />
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
          <CodeViewer
            code={customColorExampleCode}
            node={customColorExampleNode}
          />
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
          <CodeViewer code={controlsExampleCode} node={controlsExampleNode} />
        </figure>
      </section>
      <br />
      <section>
        <h2>Size</h2>
        <p>
          Controll the size of the button, default size is equals to font-size
        </p>
        <figure>
          <CodeViewer code={sizeExampleCode} node={sizeExampleNode} />
        </figure>
      </section>
    </article>
  )
}
