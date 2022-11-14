import { styled, Switch } from '@mui/material'

import {moon, sun} from "./bgImage";

const ModeSwitch = styled(Switch)(({ theme }) => ({
  width: 67,
  height: 34,
  padding: '7px',
  '& .MuiSwitch-switchBase': {
    margin: '1px',
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(27px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: sun,

      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#9038df',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'light' ? '#8d5ed9' : '#0b8aea',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: moon,

    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#717d89',
    borderRadius: 20 / 2,
  },
}))

export default ModeSwitch