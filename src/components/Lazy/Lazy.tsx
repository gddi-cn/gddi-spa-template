import React from 'react'
import { useAtom } from 'jotai'
import { pageFallbackAtom } from '@components/Lazy/store'
import { loadingAtom } from '@components/LayoutLoading/store'
import Fallback from '@components/Lazy/Fallback'

interface LazyPros {
  children?: NonNullable<React.ReactNode>;
}

const Lazy: React.FC<LazyPros> = (
  {
    children,
  }
) => {
  const [fallback] = useAtom(pageFallbackAtom)

  return (
    <React.Suspense fallback={<Fallback>{fallback}</Fallback>}>
      { children }
    </React.Suspense>
  )
}

export default Lazy
