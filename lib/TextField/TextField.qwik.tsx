/** @jsxImportSource @builder.io/qwik */
import {
  component$,
  CSSProperties,
  useComputed$,
  useStore,
} from '@builder.io/qwik'
import classnames from 'classnames'

import styles from './TextField.module.css' // Importamos los estilos como módulos
import { CSTextFieldProps, formatPhoneNumber } from './TextField.common'

export interface TextFieldProps extends CSTextFieldProps {
  style?: CSSProperties
  labelStyles?: CSSProperties
  inputStyles?: CSSProperties
  labelUpperCase?: boolean
}


export const TextField = component$((props: TextFieldProps) => {
  const state = useStore({
    value: props.value ?? '',
  }) as { value: string };


  const labelCompputed = useComputed$(() => {
    if (props.labelUpperCase) {
      return props.label?.toUpperCase()
    }
    return props.label
  })


  return (
    <div class={styles.container}>
      {/* Etiqueta del input */}
      <label for={props.id} class={classnames(styles.label, props.labelStyles)}>
        {labelCompputed}
      </label>

      {/* Input de texto */}
      <input
        type={props.type}
        id={props.id}
        inputMode={props.inputMode}
        value={state.value}
        onInput$={(e) => {
          const inputValue = (e.target as HTMLInputElement).value;

          if(!inputValue) {
            state.value = ''
            return
          }

          if (props.type === 'phone') {

            if(inputValue.length > 10) {
              return
            }
            state.value = formatPhoneNumber(inputValue);
          } else if (props.type === 'number') {
            state.value = inputValue.replace(/[^0-9]/g, '').slice(0, 10); // Limitar a 10 dígitos
          } else {
            state.value = inputValue;
          }
        }}
        placeholder={props.placeholder}
        class={classnames(styles.input, props.inputStyles)}
      />
    </div>
  )
})
