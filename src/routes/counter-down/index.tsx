import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { CounterDownDocs } from '~/docs/CounterDownDocs'

export default component$(() => {
  return <CounterDownDocs />
})

export const head: DocumentHead = {
  title: 'Counter Down',
  meta: [
    {
      name: 'Counter Down',
      content: 'Counter Down component docs',
    },
  ],
}
