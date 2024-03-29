import { $, useContext } from '@builder.io/qwik'
import {
  type SnackBarType,
  snackBarProvider,
} from '../context/SnackBarContextQwik'
import {} from '../SnackBar.qwik'

const useSnackBar = () => {
  const { snackBars } = useContext(snackBarProvider)

  const addSnackBar = $((snackBar: SnackBarType) => {
    snackBars.value = [...snackBars.value, snackBar]
  })

  return {
    snackBars,
    addSnackBar,
  }
}

export { useSnackBar }
