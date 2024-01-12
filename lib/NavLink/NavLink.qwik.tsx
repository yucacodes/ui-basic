/** @jsxImportSource @builder.io/qwik */

import { ClassList, Slot, component$ } from '@builder.io/qwik'
import { Link, useLocation } from '@builder.io/qwik-city'
import rippleAnimation from '../CssAnimations/ripple.module.css'
import styles from './NavLink.module.css'

export interface NavLinkProps {
  class?: ClassList
  href: string
}

export const NavLink = component$((props: NavLinkProps) => {
  const loc = useLocation()

  return (
    <Link
      class={[
        rippleAnimation.root,
        styles.root,
        props.class,
        loc.url.pathname === props.href && styles.current,
      ]}
      href={props.href}
    >
      <Slot />
    </Link>
  )
})
