import { useState } from 'react'
import './App.css'
import { Button } from '@lib'

function App() {
  const [count, setCount] = useState(0)

  const onClick = () => setCount((count) => count + 1)
  return (
    <>
      <h1>Count</h1>
      <p>{count}</p>
      <p>
        Presionas este &nbsp;
        <Button onClick={onClick}>
          botón  
        </Button>
        &nbsp; para contar
      </p>
    </>
  )
}

export default App
