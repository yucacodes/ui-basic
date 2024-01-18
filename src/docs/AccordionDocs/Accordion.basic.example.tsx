import { Container, Accordion, AccordionItem } from '@yucacodes/ui-qwik'; // __EXCLUDE__
// __EXCLUDE__
export default ( // __EXCLUDE__
  <Container  relative fullSize style={{ display: 'flex',justifyContent: 'center', alignItems:'center' }}> {/*__EXCLUDE__*/}
  <Accordion>
  <AccordionItem open={false}>
    <span q:slot="title">Test Accordion</span>
      <p> Teste es un test de accordion </p>
    </AccordionItem>
    <AccordionItem open={true}>
    <span q:slot="title">Test Accordion 2</span>
      <p> Teste es un test de accordion 2 </p>
    </AccordionItem>
  </Accordion>
  </Container> // __EXCLUDE__
) // __EXCLUDE__
