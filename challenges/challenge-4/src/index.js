import { isEven } from './helpers/even-number'
import { isFibonacci } from './helpers/fibonacci'
import { isPrime } from './helpers/prime-number'

export const printEvenPrimeFibonacciNumber = (number) => {
  const prime = { true: 'is prime', false: 'is not prime' }
  const fibonacci = { true: 'is fibonacci', false: 'is not fibonacci' }
  const even = { true: 'is even', false: 'is odd' }

  return `${number} ${prime[isPrime(number)]}, ${
    fibonacci[isFibonacci(number)]
  } and ${even[isEven(number)]}`
}
