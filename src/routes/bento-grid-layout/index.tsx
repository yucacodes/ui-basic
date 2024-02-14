import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { BentoGridLayoutDocs } from '~/docs/BentoGridLayout'


export default component$(() => {
  return <BentoGridLayoutDocs />
})

export const head: DocumentHead = {
  title: 'Bento Grid Layout',
  meta: [
    {
      name: 'Bento Grid Layout',
      content: 'Bento grid layout docs',
    },
  ],
}
