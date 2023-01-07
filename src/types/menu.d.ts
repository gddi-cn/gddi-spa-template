declare namespace Menu {
  interface Item {
    id: string | number
    label: string
    path: string
    icon: import('react').ReactNode
  }

  interface NestedItem {
    id: string | number
    label: string
    children: Array<Menu.Item>
  }
}
