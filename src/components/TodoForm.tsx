import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import styled from 'styled-components';

import { theme } from '../config';

const Form = styled.form`
  display: flex;
  align-items: flex-end;
`;

const TodoForm: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Form noValidate autoComplete="off">
        <TextField id="title" label="Task title" />
        <Button variant="outlined">Submit</Button>
      </Form>
    </ThemeProvider>
  );
};

export default TodoForm;
