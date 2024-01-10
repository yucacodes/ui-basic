import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { TabsManagerDocs } from '~/docs/TabsManagerDocs'

export default component$(() => {
  return <TabsManagerDocs />
})

export const head: DocumentHead = {
  title: 'TabsManager',
  meta: [
    {
      name: 'TabsManager',
      content: 'TabsManager component docs',
    },
  ],
}
