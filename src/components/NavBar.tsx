import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const MenuItem = styled.li`
  list-style-type: none;
  & a {
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 3px 10px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" component="div">
          React + TS
        </Typography>
        <Menu>
          <MenuItem>
            <a href="/">Tasks list</a>
          </MenuItem>
          <MenuItem>
            <a href="/">About</a>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
