import React from 'react'
import { useAtom } from 'jotai'
import { loadingAtom } from '@components/LayoutLoading/store'

const Fallback: React.FC = () => {
  const [_, setLoading] = useAtom(loadingAtom)

  React.useEffect(() => {
    setLoading(true)
    return () => setLoading(false)
  }, [])

  return (
    <React.Fragment />
  )
}

export default Fallback
