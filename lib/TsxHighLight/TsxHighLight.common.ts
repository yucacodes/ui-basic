export function preprocessCode(code: string): string {
  return code
    .split('\n')
    .filter((line) => !line.includes('__EXCLUDE__'))
    .join('\n')
}

export interface CTsxHighLightProps {
  code: string
}
