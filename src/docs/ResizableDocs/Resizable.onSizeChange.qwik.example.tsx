import { Resizable } from '@yucacodes/ui-qwik'; // __EXCLUDE__
// __EXCLUDE__
const style = {  
  minWidth: "10rem", 
  maxWidth: "15rem", 
  minHeight: "5rem", 
  maxHeight: "15rem", 
  background: "yellow",
  padding: "1rem", 
}

export default ( // __EXCLUDE__
  <div style={{ display: 'flex', gap: '1rem', alignItems: "center", justifyContent: "center", flexDirection: "column" }}> {/*__EXCLUDE__*/}
<>
  <Resizable 
    onSizeChange$={(size) => console.log(size)}
    style={style} 
  >
      resize this box and see console logs
  </Resizable>
</>
  </div> // __EXCLUDE__
) // __EXCLUDE__
