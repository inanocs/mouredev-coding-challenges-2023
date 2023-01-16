export const ERROR_LENGTH_NOT_IN_THRESHOLD =
  'Password length must be between 8 or 16'

const LETTERS = 'abcdefghijklmnñopqrstuvwxyz'
const NUMBERS = '0123456789'
const SYMBOLS = '!#@~$%&/()=^*.,-_'

const lengthIsBetweenThresholds = (length) => {
  const MIN_LENGTH = 8
  const MAX_LENGTH = 16
  return length >= MIN_LENGTH && length <= MAX_LENGTH
}

export const generatePassword = ({
  length = 8,
  upper = false,
  numbers = false,
  symbols = false,
}) => {
  if (!lengthIsBetweenThresholds(length))
    throw new Error(ERROR_LENGTH_NOT_IN_THRESHOLD)
}
