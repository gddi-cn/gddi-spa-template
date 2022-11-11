import React from 'react'

export const useCounter = (init = 0) => {
  const [count, setCount] = React.useState<number>(init)

  const handleAdd = () => {
    setCount(c => c + 1)
  }

  const handleReduce = () => {
    setCount(c => c > 0 ? c - 1 : c)
  }

  return {
    count,
    handleAdd,
    handleReduce,
  }
}