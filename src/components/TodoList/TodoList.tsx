import React from 'react'
import { useTodoList } from './hook'
import { Button, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';

const TodoList: React.FC = () => {
  const { todoList, handleAdd, handleRemove } = useTodoList()

  return (
    <List
      subheader={(
        <Typography variant={'h5'} fontWeight={'bold'}>To Do List</Typography>
      )}
    >
      {
        todoList.map(({ key, name, time }) => (
          <ListItem
            key={key}
            sx={{ minWidth: 200 }}
            secondaryAction={
              <IconButton onClick={() => handleRemove(key)}>
                <ClearIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={name}
              secondary={
                Intl.DateTimeFormat('zh-CN', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                  hour12: false,
                  hour: 'numeric',
                  minute: '2-digit',
                  second: '2-digit'
                }).format(new Date(time))
              }
            />
          </ListItem>
        ))
      }
      <Button sx={{ minWidth: 200 }} fullWidth onClick={handleAdd}>Add</Button>
    </List>
  )
}

export default TodoList
