export function preprocessCode(code: string): string {
  return code
    .split('\n')
    .filter((line) => !line.includes('__HIDE__'))
    .join('\n')
}
