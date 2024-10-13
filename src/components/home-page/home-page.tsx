import { $, component$, useSignal } from '@builder.io/qwik'
import styles from './home-page.module.css'
import { Button, Container } from '@yucacodes/ui-qwik'
import {
  LuArrowRightCircle,
  LuDownload,
  LuUser,
  LuRectangleHorizontal,
  LuPointer,
} from '@qwikest/icons/lucide'

import ImagenHero from '../../assets/imagen_hero.png'
import CssFrist from '../../assets/css_frist.png'

export default component$(() => {
  const step = useSignal(0)

  const toggle = $((value: number) => (step.value = value))

  return (
    <Container style={{ position: 'relative' }}>
      <section class={styles.heroBg} />
      <div class={styles.containerHero}>
        <section class={styles.sectionText}>
          <div class={styles.heroContent}>
            <h1 class={styles.title}>
              Framework UI para tu aplicación de Frontend
            </h1>
            <p>
              Un proyecto con las tecnologias nativas desde HTML5, CSS y
              Javascript, encapsulado en tus frameworks favoritos.
            </p>
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

      <section class={styles.features}>
        <div class={styles.containerTitles}>
          <div class={styles.titles}>
            <span>Jorge Narvaez</span>
            <h5>
              Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI
              designer!
            </h5>
          </div>

          <p>
            Buku ini bukan hanya untuk front-end developer yang ingin
            meningkatkan skill, buku ini juga cocok untuk back-end developer dan
            UI designer agar dapat menulis style tanpa harus menulis kode CSS
            dan tanpa mengandalkan front-end developer!
          </p>
        </div>

        <div class={styles.gridFeatures}>
          <div class={styles.grid}>
            <img src={CssFrist} alt="Imagen Hero" width={300} height={300} />

            <h4>Css varaibles frist</h4>
            <p>
              JIT engine akan men-generate utility-class yang kita gunakan saja.
              Ini akan membuat pengalaman pengembangan semakin baik.
            </p>
          </div>
          <div class={styles.grid}>
            <img src={CssFrist} alt="Imagen Hero" width={300} height={300} />

            <h4>Css varaibles frist</h4>
            <p>
              JIT engine akan men-generate utility-class yang kita gunakan saja.
              Ini akan membuat pengalaman pengembangan semakin baik.
            </p>
          </div>
          <div class={styles.grid}>
            <img src={CssFrist} alt="Imagen grid" width={300} height={300} />

            <h4>Css varaibles frist</h4>
            <p>
              JIT engine akan men-generate utility-class yang kita gunakan saja.
              Ini akan membuat pengalaman pengembangan semakin baik.
            </p>
          </div>
        </div>
      </section>

      <section class={styles.displayExamples}>
        <div class={styles.displayExamples__list}>
          <ul>
            <li
              onClick$={() => toggle(0)}
              class={[step.value === 0 ? styles.active : '']}
            >
              <LuUser />
              formualrios
            </li>
            <li
              onClick$={() => toggle(1)}
              class={[step.value === 1 ? styles.active : '']}
            >
              <LuPointer />
              Botones
            </li>
            <li
              onClick$={() => toggle(2)}
              class={[step.value === 2 ? styles.active : '']}
            >
              <LuRectangleHorizontal />
              Cards
            </li>
          </ul>
        </div>
        <div class={styles.displayExamplesRight}>
          <article
            class={[
              styles.displayExamplesRight__content,
              step.value === 0 ? styles.show : '',
            ]}
          >
            formualrios
          </article>
          <article
            class={[
              styles.displayExamplesRight__content,
              step.value === 1 ? styles.show : '',
            ]}
          >
            Botones
          </article>

          <article
            class={[
              styles.displayExamplesRight__content,
              step.value === 2 ? styles.show : '',
            ]}
          >
            Cards
          </article>
        </div>
      </section>
    </Container>
  )
})
