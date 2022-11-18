import { useAtom } from 'jotai'
import { sidebarOpenAtom } from '@layout/Sidebar/store'

export const useToggleBtn = () => {
  const [, setSidebarOpen] = useAtom(sidebarOpenAtom)

  const toggleSidebar = () => {
    setSidebarOpen(o => !o)
  }

  return {
    toggleSidebar,
  }
}