import React from 'react'
import Fallback from './Fallback'

interface LazyPros {
  children?: React.ReactNode;
}

const Lazy: React.FC<LazyPros> = (
  {
    children,
  }
) => {
  return (
    <React.Suspense fallback={<Fallback />}>
      { children }
    </React.Suspense>
  )
}

export default Lazy
