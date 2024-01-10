import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { ButtonDocs } from '~/docs/ButtonDocs'

export default component$(() => {
  return <ButtonDocs />
})

export const head: DocumentHead = {
  title: 'Button',
  meta: [
    {
      name: 'Button',
      content: 'Button component docs',
    },
  ],
}
