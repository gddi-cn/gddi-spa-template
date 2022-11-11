import { atom } from 'jotai'
import { PaletteMode } from '@mui/material'

import { defaultTheme } from '@/config'
import { StorageItem } from '@shared/enums/storage'
import { ls } from '@utils/dom'
import { isValidateHexColor, isValidatePaletteMode } from '@utils/validator'

// Get initial theme params
const savedMode = ls.get(StorageItem.PALETTE_MODE)
const mode: PaletteMode = isValidatePaletteMode(savedMode) ? savedMode : defaultTheme.MODE

const savedPrimary = ls.get(StorageItem.PRIMARY_COLOR)
const primary: string = isValidateHexColor(savedPrimary) ? savedPrimary : defaultTheme.PRIMARY

const savedSecondary = ls.get(StorageItem.SECONDARY_COLOR)
const secondary: string = isValidateHexColor(savedSecondary) ? savedSecondary : defaultTheme.SECONDARY

const savedError = ls.get(StorageItem.ERROR_COLOR)
const error: string = isValidateHexColor(savedError) ? savedError : defaultTheme.ERROR

const savedWarning = ls.get(StorageItem.WARNING_COLOR)
const warning: string = isValidateHexColor(savedWarning) ? savedWarning : defaultTheme.WARNING

const savedInfo = ls.get(StorageItem.INFO_COLOR)
const info: string = isValidateHexColor(savedInfo) ? savedInfo : defaultTheme.INFO

const savedSuccess = ls.get(StorageItem.SUCCESS_COLOR)
const success: string = isValidateHexColor(savedSuccess) ? savedSuccess : defaultTheme.SUCCESS

// Init State
export const modeAtom = atom<PaletteMode>(mode)

export const primaryColorAtom = atom<string>(primary)

export const secondaryColorAtom = atom<string>(secondary)

export const errorColorAtom = atom<string>(error)

export const warningColorAtom = atom<string>(warning)

export const infoColorAtom = atom<string>(info)

export const successColorAtom = atom<string>(success)