/** @jsxImportSource @builder.io/qwik */ // __EXCLUDE__
import { Button, Container } from '@yucacodes/ui-qwik'
import { $, component$ } from '@builder.io/qwik'
import { useSnackBar } from '../../../lib/SnackBar/hooks/useSnackBarQuik'
import { SnackBarProvider } from '../../../lib/SnackBar/context/SnackBarContextQwik'

const ViewSnackBar = component$(() => {
  const { snackBars, addSnackBar } = useSnackBar()

  const ShowSnackBarTextOnly = $(() => {
    addSnackBar({
      message: '¡Aquí puedes escribir tu mensaje! Se cerrará en 4 seg.😊',
    })
  })

  const ShowSnackBarManualClose = $(() => {
    addSnackBar({
      message: 'Escribe tu mensaje aquí y ciérralo manualmente si lo deseas.👍🏻',
      colorLabelAction: 'secondary',
      showCloseButton: true,
    })
  })

  const ShowSnackBarCustomClick = $(() => {
    addSnackBar({
      message: 'Escribe tu mensaje y personaliza el click.😮',
      colorLabelAction: 'warning',
      showAction: true,
      labelAction: 'Click',
      customClickAction: $(() => {
        alert('Hiciste click en la acción del SnackBar 👍🏻')
      }),
    })
  })

  const ShowSnackBarLightTheme = $(() => {
    addSnackBar({
      message:
        'Puedes personalizar el tema claro en el SnackBar si lo deseas.😎',
      snackBarTheme: 'light',
      colorLabelAction: 'black',
      showCloseButton: true,
    })
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
        <Button onClick$={() => ShowSnackBarTextOnly()}>
          SnackBar solo texto
        </Button>
        <Button secondary onClick$={() => ShowSnackBarManualClose()}>
          SnackBar con opción de cerrar
        </Button>
        <Button warning onClick$={() => ShowSnackBarCustomClick()}>
          Snackbar con acción de click personalizada
        </Button>
        <Button black onClick$={() => ShowSnackBarLightTheme()}>
          Snackbar con tema claro
        </Button>
      </div>
    </Container>
  )
})
export default (
  // _EXCLUDE_
  <SnackBarProvider>
    <ViewSnackBar />
  </SnackBarProvider>
  // _EXCLUDE_
) // _EXCLUDE_
