import React from 'react'
import { useAtom } from 'jotai'
import { createTheme } from '@mui/material'

import {
  modeAtom,
  primaryColorAtom,
  secondaryColorAtom,
  errorColorAtom,
  warningColorAtom,
  infoColorAtom,
  successColorAtom,
} from './store'

export const usDynamicTheme = () => {
  const [mode] = useAtom(modeAtom)
  const [primary] = useAtom(primaryColorAtom)
  const [secondary] = useAtom(secondaryColorAtom)
  const [error] = useAtom(errorColorAtom)
  const [warning] = useAtom(warningColorAtom)
  const [info] = useAtom(infoColorAtom)
  const [success] = useAtom(successColorAtom)

  return React.useMemo(
    () => createTheme({
      palette: {
        mode,
        primary: { main: primary },
        secondary: { main: secondary },
        error: { main: error },
        warning: { main: warning },
        info: { main: info },
        success: { main: success },
        background: { default: mode === 'dark' ? '#121212' : '#fcfcfe' }
      }
    }),
    [mode, primary, secondary, error, warning, info, success]
  )
}