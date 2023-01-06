declare namespace Menu {
  interface Instance {
    id: string | number
    label: string
    path?: string
    icon?: import('react').ReactNode
    children?: Array<Omit<Menu.Instance, 'children' | 'id'>>
  }
}
