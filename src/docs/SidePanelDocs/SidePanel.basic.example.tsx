import { 
  component$, 
  useSignal 
} from '@builder.io/qwik'; 
import { SidePanel, Button } from '@lib'; // __EXCLUDE__

const Example =  // __EXCLUDE__
component$(() => {

  const openSig = useSignal(false)

  return (
    <div
      style={{ 
        minWidth: "100%", // __EXCLUDE__
        minHeight: "100%", // __EXCLUDE__
        position: "relative",
        overflow: "hidden",
        textAlign: "right", // __EXCLUDE__
        padding: "1rem", // __EXCLUDE__
        "--side-panel-width": "50%",
        "--side-panel-min-width": "20%",
        "--side-panel-max-width": "60%",
      }}>

      <SidePanel 
        open={openSig.value} 
        style={{
          background: "yellow", 
          textAlign: "center" // __EXCLUDE__
        }}
      >
        <a href='https://www.google.com'>
          Ir a google
        </a>
      </SidePanel>

      <Button 
        onClick$={() => { 
          openSig.value = !openSig.value 
        }}
      >
        Press
      </Button>
    </div>
  )
})
export default ( // __EXCLUDE__
  <Example /> // __EXCLUDE__
) // __EXCLUDE__