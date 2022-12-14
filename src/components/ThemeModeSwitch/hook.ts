import React from 'react'
import { useAtom } from 'jotai'
import { modeAtom } from '@components/Theme'
import { ls } from '@utils/dom'
import { StorageItem } from '@shared/enums/storage'

export const useMode = () => {
  const [mode, setMode] = useAtom(modeAtom)

  const handleModeChange = (dark: boolean) => {
    const mode = dark ? 'dark' : 'light'
    ls.set(StorageItem.PALETTE_MODE, mode)
    setMode(mode)
  }

  return { mode, handleModeChange }
}