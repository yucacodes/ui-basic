import {
  $,
  Slot,
  component$,
  createContextId,
  useContextProvider,
  useSignal,
  useStore,
  useTask$,
  type Signal,
} from '@builder.io/qwik'
import { SnackBar } from '../SnackBar.qwik'

export type SnackBarType = {
  id: number
  message: string
  snackBarTheme?: string
  showCloseButton?: boolean
  colorLabelAction?: string
  showAction?: boolean
  labelAction?: string
  customClickAction?: () => void
}

export interface State {
  snackBars: Signal<SnackBarType[]>
}

export const snackBarProvider = createContextId<State>('SnackBarProvider')

export const SnackBarProvider = component$(() => {
  const state = useStore<State>({
    snackBars: useSignal<SnackBarType[]>([]),
  })

  useTask$(({ track, cleanup }) => {
    track(() => state.snackBars.value)

    const snackBarsWithoutAction = state.snackBars.value.filter(
      (sb) => !sb.showAction && !sb.showCloseButton,
    )
    if (snackBarsWithoutAction.length) {
      const currentSnackBars = snackBarsWithoutAction[0]
      const timer = setTimeout(() => {
        state.snackBars.value = state.snackBars.value.filter(
          (sb) => sb.id !== currentSnackBars.id,
        )
      }, 4000)
      cleanup(() => {
        clearTimeout(timer)
      })
    }
  })

  useContextProvider(snackBarProvider, state)

  return (
    <>
      <SnackBar />
      <Slot />
    </>
  )
})
