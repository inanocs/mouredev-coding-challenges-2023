import { mapToLeet } from './helpers/mapper.helper'

export const convertToLeet = (text) => text.split('').map(mapToLeet).join('')
