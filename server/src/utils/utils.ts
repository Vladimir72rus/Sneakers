export const toIntArray = (str: string) : number[] => {
  const ret: number[] = []
  str.split(',').forEach((el) => {
    const v = parseInt(el)
    if (!isNaN(v)) {
      ret.push(v)
    }
  })

  return ret
}
