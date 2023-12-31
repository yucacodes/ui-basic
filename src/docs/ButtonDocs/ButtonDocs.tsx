import { CodeViewer } from '../../components/CodeViewer/CodeViewer'

import ButtonVariantExampleNode from './Button.variant.example'
import ButtonVariantExampleCode from './Button.variant.example.tsx?raw'

import ButtonThemeColorExampleNode from './Button.themeColor.example'
import ButtonThemeColorExampleCode from './Button.themeColor.example.tsx?raw'

import ButtonCustomColorExampleNode from './Button.customColor.example'
import ButtonCustomColorExampleCode from './Button.customColor.example.tsx?raw'

export function ButtonDocs() {
  return (
    <>
      <article>
        <h1>Variants</h1>
        <p>The Button comes with three variants</p>
        <figure>
          <CodeViewer
            code={ButtonVariantExampleCode}
            node={ButtonVariantExampleNode}
          />
        </figure>
      </article>
      <br />
      <article>
        <h1>Theme colors</h1>
        <p>The Button comes with seven options of theme defined colors</p>
        <figure>
          <CodeViewer
            code={ButtonThemeColorExampleCode}
            node={ButtonThemeColorExampleNode}
          />
        </figure>
      </article>
      <br />
      <article>
        <h1>Custom colors</h1>
        <p>
          The button comes with the option to set a custom color, 
          works with hexadecimal format or with an RGB object. 
          The contrast color is set automatically.
        </p>
        <figure>
          <CodeViewer
            code={ButtonCustomColorExampleCode}
            node={ButtonCustomColorExampleNode}
          />
        </figure>
      </article>
    </>
  )
}
