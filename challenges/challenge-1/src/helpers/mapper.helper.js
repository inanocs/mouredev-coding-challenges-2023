import { leetAlphabet } from './alphabet.helper'
export const mapToLeet = (word) => leetAlphabet[word.toLowerCase()] || word
