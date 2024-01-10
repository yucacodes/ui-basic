/** @jsxImportSource @builder.io/qwik */

import { ClassList, component$ } from '@builder.io/qwik'
import { CTsxHighLightProps, highLight } from './TsxHighLight.common'
import './TsxHighLight.css'

export interface TsxHighLightProps extends CTsxHighLightProps {
  class?: ClassList
}

export const TsxHighLight = component$((props: TsxHighLightProps) => {
  const html = highLight(props.code)

  return (
    <pre class={[props.class, 'tsxhl']}>
      <code dangerouslySetInnerHTML={html}></code>
    </pre>
  )
})
