import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DeleteIcon from '@material-ui/icons/Delete';

import taskInterface from '../interfaces/taskInterface';

interface TodoListProps {
  tasks: taskInterface[];
  deleteTask: (taskId: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, deleteTask }) => {
  return (
    <List>
      {tasks.map(item => {
        return (
          <ListItem
            key={item.id}
            button
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary={item.value} />
            <ListItemIcon
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.preventDefault();
                  deleteTask(item.id);
                }}>
              <DeleteIcon />
            </ListItemIcon>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoList;
