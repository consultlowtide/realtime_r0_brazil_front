import React from 'react';
import Section from 'components/Section';
import { Typography } from '@material-ui/core';
import Rt from 'components/Rt';

import useStyles from './AboutRt.styles';

function AboutRt({ locale }) {
  const classes = useStyles();

  return (
    <Section>
      <Typography
        variant="h1"
        component="h1"
        className={classes.resourceHeading}
      >
        <Rt /> COVID-19 in {locale}
      </Typography>
      <Typography variant="body1">
        These are up-to-date values for <Rt />, a key measure of how fast
        COVID-19 is growing across Canada’s provinces and territories. It
        represents the average number of people who become infected by an
        infectious person. If <Rt /> is above 1.0, the virus will spread
        quickly. When <Rt /> is below 1.0, the virus will stop spreading. Check
        out our Resources section to learn more.
      </Typography>
    </Section>
  );
}

export default AboutRt;
