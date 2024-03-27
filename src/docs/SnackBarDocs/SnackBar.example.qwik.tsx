/** @jsxImportSource @builder.io/qwik */ // __EXCLUDE__
import { Button, Container } from '@yucacodes/ui-qwik'
import { $, component$ } from '@builder.io/qwik'
import { useSnackBar } from '../../../lib/SnackBar/hooks/useSnackBarQuik'

const ViewSnackBar = component$(() => {
  const { snackBars, addSnackBar } = useSnackBar()

  const handleAddSnackBar = $((type: string) => {
    switch (type) {
      case 'primary':
        addSnackBar({
          id: snackBars.value.length + 1,
          message: '¡Aquí puedes escribir tu mensaje! Se cerrará en 4 seg.😊',
        })
        break
      case 'secondary':
        addSnackBar({
          id: snackBars.value.length + 1,
          message:
            'Escribe tu mensaje aquí y ciérralo manualmente si lo deseas.👍🏻',
          colorLabelAction: 'secondary',
          showCloseButton: true,
        })
        break
      case 'warning':
        addSnackBar({
          id: snackBars.value.length + 1,
          message: 'Escribe tu mensaje y personaliza el click.😮',
          colorLabelAction: 'warning',
          showAction: true,
          labelAction: 'Click',
          customClickAction: $(() => {
            alert('Hiciste click en la acción del SnackBar 👍🏻')
          }),
        })
        break
      case 'light':
        addSnackBar({
          id: snackBars.value.length + 1,
          message:
            'Puedes personalizar el tema claro en el SnackBar si lo deseas.😎',
          snackBarTheme: 'light',
          colorLabelAction: 'black',
          showCloseButton: true,
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
          flexDirection: 'column',
          gap: '1em',
        }}
      >
        <Button onClick$={() => handleAddSnackBar('primary')}>
          SnackBar solo texto
        </Button>
        <Button secondary onClick$={() => handleAddSnackBar('secondary')}>
          SnackBar con opción de cerrar
        </Button>
        <Button warning onClick$={() => handleAddSnackBar('warning')}>
          Snackbar con acción de click personalizada
        </Button>
        <Button black onClick$={() => handleAddSnackBar('light')}>
          Snackbar con tema claro
        </Button>
      </div>
    </Container>
  )
})
export default (
  // __EXCLUDE__
  <ViewSnackBar /> // __EXCLUDE__
) // __EXCLUDE__
