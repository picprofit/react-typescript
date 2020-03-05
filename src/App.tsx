import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import taskInterface from './interfaces/taskInterface';
import NavBar from './components/NavBar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const getRandomKey = (): string => {
  return Math.random()
    .toString(36)
    .substring(7);
};

const App: React.FC = () => {
  const [tasks, setTasks] = useState<taskInterface[]>([]);

  const addTask = (task: string) => {
    setTasks(prev => [
      ...prev,
      {
        id: getRandomKey(),
        value: task
      }
    ]);
  };

  const deleteTask = (taskId: string) => {
    setTasks(prev =>
      prev.filter((item: taskInterface): boolean => {
        return taskId !== item.id;
      })
    );
  };

  return (
    <>
      <NavBar />
      <Container>
        <Box mt={5} mb={5}>
          <Typography variant="h3" component="h1">
            Tasks list created with React + TypeScript + Material UI
          </Typography>
          <Box mt={1} mb={1}>
            <TodoForm addTask={addTask} />
          </Box>
          <Box mt={1} mb={1}>
            <TodoList tasks={tasks} deleteTask={deleteTask}></TodoList>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default App;
