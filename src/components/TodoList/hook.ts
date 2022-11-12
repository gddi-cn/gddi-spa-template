import React from 'react'
import produce from 'immer'

export interface TodoItem {
  key: number,
  name: string,
  time: number,
}

const itemList = [
  { key: 1, name: 'Javascript', time: new Date().getTime() },
  { key: 2, name: 'Rust', time: new Date().getTime() },
  { key: 3, name: 'Cpp', time: new Date().getTime() },
  { key: 4, name: 'Go', time: new Date().getTime() },
]

export const useTodoList = () => {
  const [todoList, setTodoList] = React.useState<Array<TodoItem>>([])

  const handleAdd = () => {
    setTodoList(produce(draft => {
      const newItem = itemList.shift()
      if (!newItem) return
      draft.push(newItem)
    }))
  }

  const handleRemove = (key: React.Key) => {
    setTodoList(produce(draft => {
      const idx = draft.findIndex(x => x.key === key)
      if (idx < 0) return
      let deleteItem = draft.splice(idx, 1)
      if (!deleteItem.length) return
      itemList.push({...deleteItem[0]})
    }))
  }

  return {
    todoList,
    handleAdd,
    handleRemove,
  }
}