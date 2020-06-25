import React from 'react';
import { Container } from '@material-ui/core';

import About from 'components/About';
import Footer from 'components/Footer';
import Typography from 'components/Typography';
import Rt from 'components/Rt';
import useStyles from './Layout.styles';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container} maxWidth="lg" component="main">
        <section>
          <Typography variant="h1" component="h1" style={{ margin: '32px 0' }}>
            <Rt /> COVID-19 in Canada 🇨🇦
          </Typography>
          <Typography variant="body1">
            These are up-to-date values for <Rt />, a key measure of how fast
            COVID-19 is growing across Canada’s provinces and territories. It
            represents the average number of people who become infected by an
            infectious person. If <Rt /> is above 1.0, the virus will spread
            quickly. When <Rt /> is below 1.0, the virus will stop spreading.
            Check out our Resources section to learn more.
          </Typography>
        </section>
        {children}
        <About />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
