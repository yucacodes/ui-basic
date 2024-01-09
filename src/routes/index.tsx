import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { ButtonDocs } from '~/docs/ButtonDocs'
import { SidePanelLayout, CenterContentLayout } from '@lib'

export default component$(() => {
  return (
    <SidePanelLayout>
      <CenterContentLayout q:slot="main">
        <ButtonDocs />
      </CenterContentLayout>
    </SidePanelLayout>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
}
