import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import { SnackBarDocs } from '~/docs/SnackBarDocs'

export default component$(() => {
  return <SnackBarDocs />
})

export const head: DocumentHead = {
  title: 'SnackBar',
  meta: [
    {
      name: 'SnackBar',
      content: 'SnackBar component docs',
    },
  ],
}
