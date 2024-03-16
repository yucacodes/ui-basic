import { Container, CounterDown} from '@yucacodes/ui-qwik'; // __EXCLUDE__
// __EXCLUDE__
export default ( // __EXCLUDE__
// __EXCLUDE__
  <Container relative fullSize style={{ display: 'flex', gap: '1rem', alignItems: "center", justifyContent: "center", flexDirection: "column"}}> {/*__EXCLUDE__*/}
    <CounterDown started  beerTime={new Date().getTime() + 1000 * 60 * 60 } />

    <CounterDown started clock beerTime={new Date().getTime() + 1000 * 60 * 60 }/>
      
    <CounterDown full  started={false}  beerTime={new Date().getTime() + 1000 * 60 * 60 }/>
   

  </Container> // __EXCLUDE__
) // __EXCLUDE__
