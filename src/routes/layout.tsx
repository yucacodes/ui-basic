import { component$, Slot } from '@builder.io/qwik'
import { LuMenu } from '@qwikest/icons/lucide'
import {
  Button,
  CenterContentLayout,
  HeaderLayout,
  NavLink,
  SideNav,
  SidePanelLayout,
  SideNavSection,
  ToogleSidePanel,
} from '@yucacodes/ui-qwik'

import "@fontsource/ibm-plex-sans/latin-400.css"
import "@fontsource/lato/latin-400.css"
import style from './layout.module.css'

export default component$(() => {
  return (
    <SidePanelLayout left>
      <SideNav    q:slot="panel">
        <NavLink href="/">Yui</NavLink>
        <SideNavSection  class={style.sideNavSection} collapsed>
          <span
            q:slot="title">
            Componentes
          </span>
          <NavLink href="/accordion/">Accordion</NavLink>
          <NavLink href="/button/">Button</NavLink>
          <NavLink href="/tabs-manager/">TabsManager</NavLink>
          <NavLink href="/resizable/">Resizable</NavLink>
          <NavLink href="/side-panel/">SidePanel</NavLink>
          <SideNavSection>
            <Icon
              q:slot='icon'
            >
            </Icon>
            Layouts</SideNavSection>
          <NavLink href="/header-layout/">header layout</NavLink>
        </SideNavSection>
      </SideNav>
      <HeaderLayout hideHeaderOnPc>
        <header
          q:slot="header"
          style={{
            padding: '0.2rem',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <ToogleSidePanel>
            <Button black text>
              <LuMenu font-size="2.1rem" />
            </Button>
          </ToogleSidePanel>
        </header>
        <CenterContentLayout>
          <Slot />
        </CenterContentLayout>
      </HeaderLayout>
    </SidePanelLayout>
  )
})



export const Icon = component$(() => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16.95 9.01c3.02 .739 5.05 2.123 5.05 3.714c0 2.367 -4.48 4.276 -10 4.276s-10 -1.909 -10 -4.276c0 -1.59 2.04 -2.985 5.07 -3.724" />
    <path d="M7 9c0 1.105 2.239 2 5 2s5 -.895 5 -2v-.035c0 -2.742 -2.239 -4.965 -5 -4.965s-5 2.223 -5 4.965v.035" />
    <path d="M15 17l2 3" />
    <path d="M8.5 17l-1.5 3" />
    <path d="M12 14h.01" />
    <path d="M7 13h.01" />
    <path d="M17 13h.01" />
  </svg>
});