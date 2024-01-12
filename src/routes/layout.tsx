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
} from '@lib'

export default component$(() => {
  return (
    <SidePanelLayout>
      <SideNav q:slot="panel">
        <NavLink href="/Accordion/">Accordion</NavLink>
        <NavLink href="/Button/">Button</NavLink>
        <NavLink href="/TabsManager/">TabsManager</NavLink>
        <NavLink href="/SidePanel/">SidePanel</NavLink>
      </SideNav>
      <HeaderLayout hideHeader:pc>
        <header
          q:slot="header"
          style={{ padding: '0.2rem', display: 'flex', alignItems: 'center' }}
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
