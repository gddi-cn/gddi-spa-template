import React from 'react'
import { useAtom } from 'jotai'
import { loadingAtom } from '@components/LayoutLoading/store'

const Fallback: React.FC<{ children?: React.ReactNode }> = (
  {
    children
  }
) => {
  const [, setLoading] = useAtom(loadingAtom)

  React.useEffect(
    () => {
      setLoading(true)
      return () => setLoading(false)
    },
    []
  )

  return (
    <>{children}</>
  )
}

export default Fallback
