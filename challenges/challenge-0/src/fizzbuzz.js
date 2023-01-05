const isMultiple = (number, multiple) => number % multiple === 0

export const fizzBuzz = (number) => {
  const dict = {
    3: 'fizz',
    5: 'buzz',
  }
  const word = Object.keys(dict)
    .filter((multiple) => isMultiple(number, Number(multiple)))
    .map((multiple) => dict[multiple])
    .join('')

  return word || number
}
