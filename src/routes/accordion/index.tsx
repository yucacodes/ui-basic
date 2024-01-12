import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { AccordionDocs } from '~/docs/AccordionDocs'

export default component$(() => {
  return <AccordionDocs />
})

export const head: DocumentHead = {
  title: 'Accordion',
  meta: [
    {
      name: 'Accordion',
      content: 'Accordion component docs',
    },
  ],
}
