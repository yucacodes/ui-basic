import { HtmlHTMLAttributes, Signal } from '@builder.io/qwik'

export interface CSTextFieldProps extends HtmlHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder?: string
  value?: Signal<string>
  type: HTMLInputElement['type'] | 'phone'
}

export const formatPhoneNumber = (value: string): string => {
  const cleaned = value.replace(/\D/g, '').slice(0, 10)
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/)

  if (match) {
    const part1 = match[1] ? `(${match[1]}` : ''
    const part2 = match[2] ? `) ${match[2]}` : ''
    const part3 = match[3] ? `-${match[3]}` : ''
    return `${part1}${part2}${part3}`.trim()
  }

  return value
}
