import hljs from 'highlight.js'
import typescript from 'highlight.js/lib/languages/typescript'

hljs.registerLanguage('ts', typescript)
hljs.configure({ classPrefix: '' })

export function preProcessCode(code: string): string {
  return code
    .split('\n')
    .filter((line) => !line.includes('__EXCLUDE__'))
    .join('\n')
}

export function postProcessHtml(html: string): string {
  return html
    .split('\n')
    .filter((line) => !line.includes('__HIDE__'))
    .join('\n')
}

export function highLight(code: string): string {
  return postProcessHtml(
    hljs.highlight(preProcessCode(code), { language: 'ts' }).value,
  )
}

export interface CTsxHighLightProps {
  code: string
}
