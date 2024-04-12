/** @jsxImportSource @builder.io/qwik */

import { $, component$, useContext } from '@builder.io/qwik'
import { snackBarProvider, SnackBarType } from './context/SnackBarContextQwik'
import styles from './SnackBar.module.css'

export const SnackBar = component$(() => {
  const { snackBars } = useContext(snackBarProvider)

  const removeSnackBar = $((id?: number) => {
    snackBars.value = snackBars.value.filter((sb) => sb.id !== id)
  })

  const handleClick = $((snackBar: SnackBarType) => {
    if (snackBar.showCloseButton) {
      removeSnackBar(snackBar.id)
    } else if (snackBar.showAction && snackBar.customClickAction) {
      snackBar.customClickAction()
      setTimeout(() => {
        removeSnackBar(snackBar.id)
      }, 2000)
    }
  })

  return (
    <div class={[styles.container, styles.bottomRight]}>
      {snackBars.value.map((snackBar) => (
        <div
          class={[
            styles.snackBar,
            styles.bottomRight,
            styles[
              `${
                snackBar.snackBarTheme ? snackBar.snackBarTheme : 'dark'
              }ThemeBackground`
            ],
          ]}
        >
          <p
            class={[
              styles[
                `${
                  snackBar.snackBarTheme ? snackBar.snackBarTheme : 'dark'
                }TextLabel`
              ],
            ]}
          >
            {snackBar.message ?? 'Text Label'}
          </p>
          {(snackBar.showAction || snackBar.showCloseButton) && (
            <p
              class={[
                styles.textAction,
                snackBar.snackBarTheme === 'light' && styles.lightTextAction,
                styles[snackBar.colorLabelAction ?? 'primary'],
              ]}
              onClick$={() => handleClick(snackBar)}
            >
              {snackBar.showCloseButton
                ? 'CLOSE'
                : snackBar.labelAction ?? 'ACTION'}
            </p>
          )}
        </div>
      ))}
    </div>
  )
})
