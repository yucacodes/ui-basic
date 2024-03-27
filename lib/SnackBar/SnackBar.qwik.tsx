/** @jsxImportSource @builder.io/qwik */

import { component$, useContext } from '@builder.io/qwik'
import { snackBarProvider } from './context/SnackBarContextQwik'
import styles from './SnackBar.module.css'

export interface SnackBarQwikProps {
  position?: string
}

export const SnackBar = component$(({ position }: SnackBarQwikProps) => {
  const { snackBars } = useContext(snackBarProvider)

  return (
    <div class={[styles.container, styles[position ?? 'bottom-right']]}>
      {snackBars.value.map((snackBar) => (
        <div
          class={[
            styles.snackBar,
            styles[position ?? 'bottom-right'],
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
          {snackBar.showAction && (
            <p
              class={[
                styles.textAction,
                snackBar.snackBarTheme === 'light' && styles.lightTextAction,
                styles[snackBar.colorLabelAction ?? 'primary'],
              ]}
            >
              {snackBar.labelAction ?? 'ACTION'}
            </p>
          )}
        </div>
      ))}
    </div>
  )
})
