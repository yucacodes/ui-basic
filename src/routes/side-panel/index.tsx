import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { SidePanelDocs } from '~/docs/SidePanelDocs'

export default component$(() => {
  return <SidePanelDocs />
})

export const head: DocumentHead = {
  title: 'Side Panel',
  meta: [
    {
      name: 'Side Panel',
      content: 'SidePanel component docs',
    },
  ],
}
