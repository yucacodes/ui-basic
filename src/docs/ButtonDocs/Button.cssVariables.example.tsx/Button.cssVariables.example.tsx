import styles from "./styles.module.css"

import { Button } from '@yucacodes/ui-qwik' // __EXCLUDE__
// __EXCLUDE__
export default ( // __EXCLUDE__
<div class={styles.custom}>
<div style={{padding: "1rem", display: 'flex', gap: '1rem', alignItems: "center", justifyContent: "center", flexDirection: "column" }}> {/*__EXCLUDE__*/}
  <Button>
    Contained
  </Button>

  <Button text warning>
    Text Warning
  </Button>

  <Button outlined disabled loading>
    Disabled Loading
  </Button>
</div>
</div> // __EXCLUDE__
) // __EXCLUDE__
