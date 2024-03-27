import { Container, SnackBar } from '@yucacodes/ui-qwik' // __EXCLUDE__
// __EXCLUDE__
export default (
  // __EXCLUDE__
  <Container
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      gap: '1rem',
    }}
  >
    {/*__EXCLUDE__*/}
    <>
      {/*__EXCLUDE__*/}
      <SnackBar message="Hola" textAction="Cerrar"></SnackBar>
      <SnackBar secondary message="Mensaje 2" textAction="Click"></SnackBar>
      <SnackBar warning message="Mensaje 3" textAction="Ok"></SnackBar>
    </>
  </Container> // __EXCLUDE__
) // __EXCLUDE__
