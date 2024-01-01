import classNames from 'classnames'
import { ReactNode } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styles from './CodeViewer.module.css'

export function prepareCode(src: string): string {
  return src
    .split('\n')
    .filter((x) => !x.includes('__HIDE__'))
    .join('\n')
    .replaceAll('@lib', '@yucacodes/ui')
}

export interface CodeVieweProps {
  className?: string
  code: string
  node: ReactNode
}

export function CodeViewer(props: CodeVieweProps) {
  return (
    <div className={classNames(props.className, styles.root)}>
      <div>
        <SyntaxHighlighter
          customStyle={{ textAlign: 'left' }}
          language="typescript"
          style={dracula}
        >
          {prepareCode(props.code)}
        </SyntaxHighlighter>
      </div>
      <div>{props.node}</div>
    </div>
  )
}
