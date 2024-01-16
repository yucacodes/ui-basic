import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { HeaderLayoutDocs } from '../../docs/HeaderLayout';

export default component$(() => {
  return <HeaderLayoutDocs />
});


export const head: DocumentHead = {
    title: 'Header Layout',
    meta: [
      {
        name: 'Header Layout',
        content: 'Header layout docs',
      },
    ],
  }
  