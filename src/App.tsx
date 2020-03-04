import React from 'react';
import Container from '@material-ui/core/Container';

import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
        <Container>
            <h1>Hello!</h1>
        </Container>
    </>
  );
};

export default App;
