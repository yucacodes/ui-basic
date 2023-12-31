import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight, vs } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import './App.css'

import examples from './Test.example'
import exampleSrc from './Test.example.tsx?raw'

function prepareExampleSrc(src: string): string {
  src = src.replaceAll('@lib', '@yucacodes/ui')
  return src
    .split('\n')
    .filter((x) => !x.includes('__HIDE__'))
    .join('\n')
    .replaceAll('@lib', '@yucacodes/ui')
}

function App() {
  return (
    <>
      <h1>Source</h1>
      <SyntaxHighlighter
        customStyle={{ textAlign: 'left' }}
        language="typescript"
        style={vs}
      >
        {prepareExampleSrc(exampleSrc)}
      </SyntaxHighlighter>
      <h2>Preview</h2>
      <div>{examples}</div>
    </>
  )
}

export default App
