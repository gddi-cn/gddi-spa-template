import React from 'react'
import { useMatch, useNavigate } from 'react-router-dom'

export const useNestedMenuItem = () => {
  const [expand, setExpand] = React.useState<boolean>(true)

  const handleClick = () => {
    setExpand(e => !e)
  }

  return {
    expand,
    handleClick,
  }
}

export const useMenuItem = (path: string) => {
  const navigate = useNavigate()
  const match =  useMatch(path)

  const handleClick = () => {
    navigate(path)
  }

  return {
    handleClick,
    match,
  }
}