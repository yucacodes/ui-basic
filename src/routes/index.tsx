import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return <div />
})

export const head: DocumentHead = {
  title: 'Yuca UI',
  meta: [
    {
      name: 'Yuca UI',
      content: 'Yuca UI Library',
    },
  ],
}
