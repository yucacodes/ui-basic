/** @jsxImportSource @builder.io/qwik */ // __EXCLUDE__
import {
  $,
  component$,
  useSignal
} from '@builder.io/qwik';

import {
  Button,
  Container,
  SidePanel
} from '@yucacodes/ui-qwik';

const Example = component$(() => {

  const openSig = useSignal(false)

  const toggle = $(() => {
    openSig.value = !openSig.value
  })

  return (
    <Container relative fullSize textRight
      style={{ "--side-panel-width": "50%" }}
    >
      <SidePanel open={openSig.value}>
        <Container textCenter> Hi ! </Container>
      </SidePanel>

      <Button style={{ margin: "1rem" }} onClick$={toggle}>
        Toogle
      </Button>
    </Container>
  )
})
export default ( // __EXCLUDE__
  <Example /> // __EXCLUDE__
) // __EXCLUDE__