/** @jsxImportSource @builder.io/qwik */ // __EXCLUDE__
import {
  component$
} from '@builder.io/qwik';

import { Container, HeaderLayout } from '@yucacodes/ui-qwik'

const Example = component$(() => {

  return (
    <Container  relative fullSize>
      <HeaderLayout  hideHeaderOnPc={false}>
         <header q:slot="header"> Nav </header>
         <main> Content </main>
      </HeaderLayout>
    </Container>
  )
})
export default ( // __EXCLUDE__
  <Example /> // __EXCLUDE__
) // __EXCLUDE__