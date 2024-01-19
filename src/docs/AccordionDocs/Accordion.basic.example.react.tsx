import { Accordion } from '@yucacodes/ui-react'; // __EXCLUDE__
// __EXCLUDE__
export default ( // __EXCLUDE__
  <section
    style={{
      padding: "1rem",
      display: 'flex',
      gap: '1rem',
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}> {/*__EXCLUDE__*/}
    <Accordion
      title={
        <span style={{
          fontSize: '1rem',
          fontWeight: 'bold'
        }}
          q:slot="title">
          Test Accordion
        </span>
      }>

      <p
        style={{
          paddingLeft: '3rem'
        }}>
        Teste es un test de accordion
      </p>

    </Accordion>
    <Accordion open
      title={<span>Test Accordion 2</span>}>

      <p
        style={{
          paddingLeft: '3rem'
        }}>
        Teste es un test de accordion 2
      </p>
    </Accordion>

  </section> // __EXCLUDE__
) // __EXCLUDE__
