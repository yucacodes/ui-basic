import { Container, Accordion } from '@yucacodes/ui-qwik'; // __EXCLUDE__
// __EXCLUDE__
export default ( // __EXCLUDE__
  <Container relative fullSize
    style={{
      display: 'flex',
      gap: '1rem',
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}> {/*__EXCLUDE__*/}
    <Accordion shadow showIcon={false} >
      <span 
        q:slot="title">
        Test Accordion
      </span>
      <p
        style={{
          paddingLeft: '3rem'
        }}>
        Teste es un test de accordion
      </p>
    </Accordion>
    <Accordion open>
      <span
        q:slot="title">
        Test Accordion 2
      </span>
      <p
        style={{
          paddingLeft: '3rem'
        }}>
        Teste es un test de accordion 2
      </p>
    </Accordion>

  </Container> // __EXCLUDE__
) // __EXCLUDE__
