export function selectedFlag(
  flags: any,
  options: readonly string[],
): string | undefined {
  return options.find((x) => flags[x] === true)
}
