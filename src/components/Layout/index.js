import React from 'react';
import { Container } from '@material-ui/core';

import Footer from 'components/Footer';
import useStyles from './Layout.styles';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container} maxWidth="lg" component="main">
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
