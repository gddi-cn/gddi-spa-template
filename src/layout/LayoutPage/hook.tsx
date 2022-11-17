import React from 'react'
import { useAtom } from 'jotai'
import { pageFallbackAtom } from '@components/Lazy/store'

export const useLayoutPage = (children?: NonNullable<React.ReactNode>) => {
  const [, setFallback] = useAtom(pageFallbackAtom)

  const render = React.useMemo(() => {
    return <>{children}</>;
  }, [children]);

  React.useEffect(() => {
    setFallback(render)
  }, [render]);


  return render
}