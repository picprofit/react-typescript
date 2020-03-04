import React from 'react';
import Container from '@material-ui/core/Container';

import NavBar from './components/NavBar';
import TodoForm from './components/TodoForm';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Tasks list created with React + TypeScript + Material UI</h1>
        <TodoForm />
      </Container>
    </>
  );
};

export default App;
