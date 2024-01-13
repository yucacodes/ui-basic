/** @jsxImportSource react */ // __EXCLUDE__
import { useState } from 'react';

import {
  Button,
  Container,
  SidePanel
} from '@yucacodes/ui-react';

const Example = () => {

  const [open, setOpen] = useState(false)

  const toggle = () => {setOpen(open => !open)}

  return (
    <Container relative fullSize textRight
      style={{ 
        "--side-panel-width": "50%" 
      } as any}
    >
      <SidePanel open={open}>
        <Container textCenter> Hi ! </Container>
      </SidePanel>

      <Button 
        style={{ margin: "1rem" }} 
        onClick={toggle}
      >
        Toogle
      </Button>
    </Container>
  )
}
export default ( // __EXCLUDE__
  <Example /> // __EXCLUDE__
) // __EXCLUDE__