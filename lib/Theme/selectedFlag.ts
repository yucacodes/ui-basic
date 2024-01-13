export function selectedFlag<T extends ReadonlyArray<string>>(
  flags: any,
  options: T,
): T[number] | undefined {
  return options.find((x) => flags[x] === true)
}
