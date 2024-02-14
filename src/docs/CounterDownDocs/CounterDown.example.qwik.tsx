import { Container, CounterDown} from '@yucacodes/ui-qwik'; // __EXCLUDE__
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
    <CounterDown />


    <CounterDown clock beerTime={new Date().getTime() + 1000 * 60 * 60 }/>
      
    <CounterDown full />
   

  </Container> // __EXCLUDE__
) // __EXCLUDE__
