export const ERROR_LENGTH_NOT_IN_THRESHOLD =
  'Password length must be between 8 or 16'

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'
const NUMBERS = '0123456789'
const SYMBOLS = '!#@~$%&/()=^*.,-_'

const lengthIsBetweenThresholds = (length) => {
  const MIN_LENGTH = 8
  const MAX_LENGTH = 16
  return length >= MIN_LENGTH && length <= MAX_LENGTH
}

const getRandomIdx = (max) => Math.floor(Math.random() * max)

export const generatePassword = ({
  length = 8,
  upper = false,
  numbers = false,
  symbols = false,
}) => {
  if (!lengthIsBetweenThresholds(length))
    throw new Error(ERROR_LENGTH_NOT_IN_THRESHOLD)

  let password = ''
  let values = LETTERS
  if (upper) {
    password += LETTERS.charAt(getRandomIdx(LETTERS.length)).toUpperCase()
    values += LETTERS.toUpperCase()
  }

  if (numbers) {
    password += NUMBERS.charAt(getRandomIdx(NUMBERS.length))
    values += NUMBERS
  }

  if (symbols) {
    password += SYMBOLS.charAt(getRandomIdx(SYMBOLS.length))
    values += SYMBOLS
  }

  for (let i = password.length; i < length; i++) {
    const idx = getRandomIdx(values.length)
    password += values.charAt(idx)
  }

  return password
}
