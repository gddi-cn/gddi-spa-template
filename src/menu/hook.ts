import React from 'react'

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
