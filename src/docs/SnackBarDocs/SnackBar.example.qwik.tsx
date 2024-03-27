/** @jsxImportSource @builder.io/qwik */ // __EXCLUDE__
import { Container } from '@yucacodes/ui-qwik'
import { $, component$ } from '@builder.io/qwik'
import { useSnackBar } from '../../../lib/SnackBar/hooks/useSnackBarQuik'

const ViewSnackBar = component$(() => {
  const { snackBars, addSnackBar } = useSnackBar()

  const handleAddSnackBar = $((type: string) => {
    switch (type) {
      case 'primary':
        addSnackBar({
          id: snackBars.value.length + 1,
          message: 'Snack Bar primary',
        })
        break
      case 'secondary':
        addSnackBar({
          id: snackBars.value.length + 1,
          message:
            'Este será un mensaje largo para probar como se comportaría el SnackBar',
          showCloseButton: true,
          colorLabelAction: 'secondary',
        })
        break
      case 'warning':
        addSnackBar({
          id: snackBars.value.length + 1,
          message: 'Snack Bar warning',
          snackBarTheme: 'light',
          showAction: true,
          labelAction: 'Click',
          colorLabelAction: 'warning',
          customClickAction: $(() => {
            alert('Hiciste click en la acción del SnackBar 👍🏻')
          }),
        })
        break
    }
  })

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '1em',
        }}
      >
        <button onClick$={() => handleAddSnackBar('primary')}>Primary</button>
        <button onClick$={() => handleAddSnackBar('secondary')}>
          Secondary
        </button>
        <button onClick$={() => handleAddSnackBar('warning')}>Warning</button>
      </div>
    </Container>
  )
})
export default (
  // __EXCLUDE__
  <ViewSnackBar /> // __EXCLUDE__
) // __EXCLUDE__
