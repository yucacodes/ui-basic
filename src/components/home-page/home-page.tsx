import { component$ } from "@builder.io/qwik"
import styles from './home-page.module.css'
export default component$(() => {
    return (
      <main class={styles.homePage}>
        <section class={styles.hero}>
           <h1 class="text-4xl font-bold">Home Page</h1>
        </section>
      </main> 
    )
  })