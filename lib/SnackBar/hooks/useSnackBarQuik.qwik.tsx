import { $, useContext } from '@builder.io/qwik'
import {
  type SnackBarType,
  snackBarProvider,
} from '../context/SnackBarContextQwik.qwik'
import {} from '../SnackBar.qwik'

const useSnackBar = () => {
  const { snackBars } = useContext(snackBarProvider)

  const addSnackBar = $((snackBar: SnackBarType) => {
    const newSnackBar = {
      ...snackBar,
      id: (snackBars.value.slice(-1)[0]?.id ?? 0) + 1,
    }
    snackBars.value = [...snackBars.value, newSnackBar]
  })

  return {
    snackBars,
    addSnackBar,
  }
}

export { useSnackBar }
