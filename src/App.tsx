import { useState } from 'react'
import './App.css'
import { Button } from '@lib'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count</h1>
      <p>{count}</p>
      <Button onClick={() => setCount((count) => count + 1)}>Press</Button>
    </>
  )
}

export default App
