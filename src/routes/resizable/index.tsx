import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { ResizableDocs } from '~/docs/ResizableDocs'

export default component$(() => {
  return <ResizableDocs />
})

export const head: DocumentHead = {
  title: 'Resizable',
  meta: [
    {
      name: 'Resizable',
      content: 'Resizable component docs',
    },
  ],
}
