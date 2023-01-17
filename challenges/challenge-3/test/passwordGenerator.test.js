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
  it('Should return password without upper letters, numbers and symbols', () => {
    const options = {
      length: 8,
      upper: false,
      numbers: false,
      symbols: false,
    }
    const regex = /^[a-z]+$/g
    expect(generatePassword(options)).toMatch(regex)
  })
  it('Should return password with upper and lower letters and without numbers and symbols', () => {
    const options = {
      length: 8,
      upper: true,
      numbers: false,
      symbols: false,
    }
    const regex = /^[a-z]+$/gi
    expect(generatePassword(options)).toMatch(regex)
  })
  it('Should return password with upper and lower letters, numbers and symbols', () => {
    const options = {
      length: 8,
      upper: true,
      numbers: true,
      symbols: true,
    }
    const regex = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!#@~$%&\/()=^*.,\-_])/gi
    expect(generatePassword(options)).toMatch(regex)
  })
})
