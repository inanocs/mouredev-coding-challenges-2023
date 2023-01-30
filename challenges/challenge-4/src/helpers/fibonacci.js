export const isFibonacci = (number) => number === getFibonacci(number)

const getFibonacci = (limit) => {
  let prev = 0
  let next = 1
  let fibonacci = prev + next

  while (fibonacci < limit) {
    prev = next
    next = fibonacci
    fibonacci = prev + next
  }

  return fibonacci
}
