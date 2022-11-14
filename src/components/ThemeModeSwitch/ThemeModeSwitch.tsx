import React from 'react'
import { useMode } from './hook'
import ModeSwitch from './ModeSwitch'

const ThemeModeSwitch: React.FC = () => {
  const { mode, handleModeChange } = useMode()

  return (
    <ModeSwitch
      checked={mode === 'dark'}
      onChange={(_, checked) => handleModeChange(checked)}
    />
  )
}

export default ThemeModeSwitch
