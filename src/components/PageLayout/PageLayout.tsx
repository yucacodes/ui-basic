import { Outlet, useNavigate } from 'react-router'
import styles from './PageLayout.module.css'

export function PageLayout() {
  const navigate = useNavigate()

  const onNavItemClick = (evt: any, route: string) => {
    evt.preventDefault()
    navigate(route)
  }

  return (
    <div className={styles.root}>
      <nav>
        <ul>
          <li>
            <a href="/" onClick={(evt) => onNavItemClick(evt, '/')}>
              Home
            </a>
          </li>
          <li>
            <a href="/Button" onClick={(evt) => onNavItemClick(evt, '/Button')}>
              Button
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
