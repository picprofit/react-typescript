import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import NavBar from './components/NavBar';
import TodoForm from './components/TodoForm';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Box mt={5} mb={5}>
          <Typography variant="h3" component="h1">
            Tasks list created with React + TypeScript + Material UI
          </Typography>
          <TodoForm />
        </Box>
      </Container>
    </>
  );
};

export default App;
