import { Resizable } from '@yucacodes/ui-qwik'; // __EXCLUDE__
// __EXCLUDE__
const style = {  
  minWidth: "5rem", 
  maxWidth: "15rem", 
  minHeight: "5rem", 
  maxHeight: "15rem", 
  background: "yellow",
  padding: "1rem", 
}

export default ( // __EXCLUDE__
  <div style={{padding: "1rem", display: 'flex', gap: '1rem', alignItems: "center", justifyContent: "center", flexDirection: "column" }}> {/*__EXCLUDE__*/}
<>
  <Resizable disabledX style={style}>
    Disabled X
  </Resizable>

  <Resizable disabledY style={style}>
    Disabled Y
  </Resizable>

  <Resizable disabled style={style}>
    Disabled
  </Resizable>
</>
  </div> // __EXCLUDE__
) // __EXCLUDE__
