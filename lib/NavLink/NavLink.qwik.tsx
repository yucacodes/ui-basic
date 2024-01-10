import { ClassList, Slot, component$ } from '@builder.io/qwik'
import { useNavigate } from '@builder.io/qwik-city'
import styles from './NavLink.module.css'

export interface NavLinkProps {
  class?: ClassList
  href: string
}

export const NavLink = component$((props: NavLinkProps) => {
  const navigate = useNavigate()

  return (
    <a
      class={[styles.root, props.class]}
      href={props.href}
      onClick$={(evt) => {
        evt.preventDefault()
        navigate(props.href)
      }}
    >
      <Slot />
    </a>
  )
})
