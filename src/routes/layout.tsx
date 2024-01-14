import { component$, Slot } from '@builder.io/qwik'
import { LuMenu } from '@qwikest/icons/lucide'
import {
  Button,
  CenterContentLayout,
  HeaderLayout,
  NavLink,
  SideNav,
  SidePanelLayout,
  ToogleSidePanel,
} from '@yucacodes/ui-qwik'

import "@fontsource/ibm-plex-sans/latin-400.css"
import "@fontsource/lato/latin-400.css"

export default component$(() => {
  return (
    <SidePanelLayout left>
      <SideNav q:slot="panel">
        <NavLink href="/accordion/">Accordion</NavLink>
        <NavLink href="/button/">Button</NavLink>
        <NavLink href="/tabs-manager/">TabsManager</NavLink>
        <NavLink href="/resizable/">Resizable</NavLink>
        <NavLink href="/side-panel/">SidePanel</NavLink>
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
