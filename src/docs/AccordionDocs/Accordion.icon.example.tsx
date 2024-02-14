import { Container, Accordion } from '@yucacodes/ui-qwik'; // __EXCLUDE__
// __EXCLUDE__
export default ( // __EXCLUDE__
  <Container relative fullSize style={{ display: 'flex', gap: '1rem', alignItems: "center", justifyContent: "center", flexDirection: "column" }}>  {/*__EXCLUDE__*/}
   
    <Accordion>
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
   

  </Container> // __EXCLUDE__
) // __EXCLUDE__
