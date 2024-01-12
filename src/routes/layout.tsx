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
        <NavLink href="/accordion/">Accordion</NavLink>
        <NavLink href="/button/">Button</NavLink>
        <NavLink href="/tabs-manager/">TabsManager</NavLink>
        <NavLink href="/resizable/">Resizable</NavLink>
        <NavLink href="/side-panel/">SidePanel</NavLink>
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
