import React from 'react';
import { Typography } from '@material-ui/core';
import Section from 'components/Section';
import Rt from 'components/Rt';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Section>
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
      </Section>
      <Section>
        <nav>
          <Link to="/canada">Canada</Link> <Link to="/ontario">Ontario</Link>{' '}
          <Link to="/resources">Resources</Link>{' '}
        </nav>
      </Section>
    </>
  );
}

export default Header;
