import { $, component$, useSignal } from '@builder.io/qwik'
import styles from './home-page.module.css'
import { Button, Container, SubTitle, TextField } from '@yucacodes/ui-qwik'
import {
  LuArrowRightCircle,
  LuDownload,
  LuUser,
  LuRectangleHorizontal,
  LuPointer,
} from '@qwikest/icons/lucide'

import ImagenHero from '../../assets/imagen_hero.png'
import CssFrist from '../../assets/css_frist.png'
import Logo from '../../assets/ui-logo.svg?jsx'


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
            {/*  <li
              onClick$={() => toggle(2)}
              class={[step.value === 2 ? styles.active : '']}
            >
              <LuRectangleHorizontal />
              Cards
            </li> */}
          </ul>
        </div>
        <div class={styles.displayExamplesRight}>
          <article
            class={[
              styles.displayExamplesRight__content,
              step.value === 0 ? styles.show : '',
            ]}
          >
            <h3> Formualrios </h3>

            <div class={styles.displayExamplesRight__content__form}>
              <SubTitle size={16} weight={600}>
                {' '}
                Account info{' '}
              </SubTitle>

              <div class={styles.displayExamplesRight__content__form__fields}>
                <TextField
                  type="text"
                  label="Display Name"
                  placeholder="Display Name"
                />
                <TextField
                  type="text"
                  label="Real Name"
                  placeholder="Real Name"
                />
              </div>

              <div class={styles.displayExamplesRight__content__form__fields}>
                <TextField type="phone" label="Phone" placeholder="Phone" />
                <TextField type="email" label="Email" placeholder="Email" />
              </div>
            </div>
          </article>
          <article
            class={[
              styles.displayExamplesRight__content,
              step.value === 1 ? styles.show : '',
            ]}
          >
            <h3> Botones </h3>
            <SubTitle size={16} weight={600} style={{ marginBottom: '1rem' }}>
                 Contained
              </SubTitle>
            <div class={styles.displayExamplesRight__content__buttons}>
            

              <Button contained>Contained</Button>
              <Button disabled>Contained</Button>
              <Button loading>Contained</Button>
            </div>
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

      <footer class={styles.footer}>
        <Container style={{ margin: "0 auto", maxWidth: "80%", padding: "4rem" }}>
           <section class={styles.footerSection}>
            <div class={styles.footerContent}>
            <Logo class={styles.logo} />
              <p>
              Open Source, un proyecto de <span>Yuca Fundation</span>
              </p>
            </div>

            <div class={styles.footerHelp}>
               <h6>Donaciones</h6>
                <a href="">Coffe Me!</a>
                <a href="">Paypal</a>
            </div>
           </section>
        </Container>
      </footer>
    </Container>
  )
})
