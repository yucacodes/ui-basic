import './App.module.css'
import { ButtonDocs } from './docs/ButtonDocs/ButtonDocs'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.root}>
      <main>
        <ButtonDocs />
      </main>
    </div>
  )
}

export default App
