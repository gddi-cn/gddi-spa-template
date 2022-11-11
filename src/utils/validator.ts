import { hexColorRegexp } from '@shared/regexp/color'

export const isValidatePaletteMode = (mode?: string): boolean => (mode === 'dark' || mode === 'light')

export const isValidateHexColor = (color?: string): boolean => {
  if (!color) return false
  return hexColorRegexp.test(color)
}