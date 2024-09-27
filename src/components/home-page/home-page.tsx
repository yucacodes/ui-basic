import { component$ } from "@builder.io/qwik"
import styles from './home-page.module.css'
import { Button, Container } from "@yucacodes/ui-qwik"
import { LuArrowRightCircle, LuDownload } from "@qwikest/icons/lucide"

import ImagenHero from '../../assets/imagen_hero.png'

export default component$(() => {
  return (
    <Container style={{ position: 'relative', }}>
      <section
        class={styles.heroBg}
      />
      <div class={styles.containerHero}>
        <section class={styles.sectionText}>
          <div class={styles.heroContent}>
            <h1 class={styles.title}>Framework UI para tu aplicación de Frontend</h1>
            <p>Un proyecto con las tecnologias nativas desde HTML5, CSS y Javascript, encapsulado en tus frameworks favoritos.</p>
          </div>
          <div class={styles.heroActions}>
            <Button class={styles.button} color="#00BAC7">
              Comenzar <LuArrowRightCircle class={styles.icon} />
            </Button>
            <div class={styles.npmActions}>
              <LuDownload color="#fff" />
              <div class={styles.npmInfo}>
                <p>Npm download</p>
                <p class={styles.npmDownloads}>1000 +</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <img
            class={styles.heroImage}
            src={ImagenHero}
            alt="Imagen Hero"
            width={500}
            height={500}
          />
        </section>
      </div>
    </Container>
  )
})