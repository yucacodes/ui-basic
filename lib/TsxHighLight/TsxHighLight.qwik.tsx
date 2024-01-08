/** @jsxImportSource @builder.io/qwik */

import { ClassList, component$ } from '@builder.io/qwik'
import hljs from 'highlight.js'
import typescript from 'highlight.js/lib/languages/typescript'
import './TsxHighLight.css'
import { CTsxHighLightProps, preprocessCode } from './TsxHighLight.common'

hljs.registerLanguage('ts', typescript)
hljs.configure({ classPrefix: '' })

export interface TsxHighLightProps extends CTsxHighLightProps {
  class?: ClassList
}

export const TsxHighLight = component$((props: TsxHighLightProps) => {
  const html = hljs.highlight(preprocessCode(props.code), { language: 'ts' })

  return (
    <pre class={[props.class, 'tsxhl']}>
      <code dangerouslySetInnerHTML={html.value}></code>
    </pre>
  )
})
