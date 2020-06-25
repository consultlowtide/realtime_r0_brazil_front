import React from 'react';
import { Container } from '@material-ui/core';

import useStyles from './Layout.styles';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container} maxWidth="lg" component="main">
        {children}
      </Container>
    </>
  );
};

export default Layout;
