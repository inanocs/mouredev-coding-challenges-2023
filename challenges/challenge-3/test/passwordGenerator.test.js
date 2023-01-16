import {
  ERROR_LENGTH_NOT_IN_THRESHOLD,
  generatePassword,
} from 'challenge-3/src/passwordGenerator'

describe('Password generator suite case', () => {
  it('Should throw Error length above the thresholds', () => {
    const options = {
      length: 17,
      upper: true,
      numbers: true,
      symbols: true,
    }

    expect(() => generatePassword(options)).toThrowError(
      ERROR_LENGTH_NOT_IN_THRESHOLD
    )
  })
  it('Should throw Error length below the thresholds', () => {
    const options = {
      length: 7,
      upper: true,
      numbers: true,
      symbols: true,
    }

    expect(() => generatePassword(options)).toThrowError(
      ERROR_LENGTH_NOT_IN_THRESHOLD
    )
  })
})
