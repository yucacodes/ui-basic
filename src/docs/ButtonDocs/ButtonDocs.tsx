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
    <>
      <article>
        <h1>Variants</h1>
        <p>The Button comes with three variants</p>
        <figure>
          <CodeViewer code={variantExampleCode} node={variantExampleNode} />
        </figure>
      </article>
      <br />
      <article>
        <h1>Theme colors</h1>
        <p>The Button comes with seven options of theme defined colors</p>
        <figure>
          <CodeViewer
            code={themeColorExampleCode}
            node={themeColorExampleNode}
          />
        </figure>
      </article>
      <br />
      <article>
        <h1>Custom colors</h1>
        <p>
          The button comes with the option to set a custom color, works with
          hexadecimal format or with an RGB object. The contrast color is set
          automatically.
        </p>
        <figure>
          <CodeViewer
            code={customColorExampleCode}
            node={customColorExampleNode}
          />
        </figure>
      </article>
      <br />
      <article>
        <h1>Controls</h1>
        <p>Controll the behavior of Button on various situations.</p>
        <figure>
          <CodeViewer code={controlsExampleCode} node={controlsExampleNode} />
        </figure>
      </article>
      <br />
      <article>
        <h1>Size</h1>
        <p>
          Controll the size of the button, default size is equals to font-size
        </p>
        <figure>
          <CodeViewer code={sizeExampleCode} node={sizeExampleNode} />
        </figure>
      </article>
    </>
  )
}
