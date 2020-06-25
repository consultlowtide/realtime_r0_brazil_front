import React from 'react';
import Section from 'components/Section';
import { Typography } from '@material-ui/core';
import Rt from 'components/Rt';

import useStyles from './AboutRt.styles';

function AboutRt({ locale, localeText }) {
  const classes = useStyles();

  return (
    <Section>
      <Typography
        variant="h1"
        component="h1"
        className={classes.resourceHeading}
      >
        {localeText}
      </Typography>
      {locale === 'Canada' && (
        <Typography variant="body1">
          These are up-to-date values for <Rt />, a key measure of how fast
          COVID-19 is growing across Canada. It represents the average number of
          people who become infected by an infectious person. If <Rt /> is above
          1.0, the virus will spread quickly. When <Rt /> is below 1.0, the
          virus will stop spreading.
        </Typography>
      )}
      {locale === 'Ontario' && (
        <Typography variant="body1">
          These are up-to-date values for <Rt />, a key measure of how fast
          COVID-19 is growing across Ontario and its{' '}
          <a
            href="http://www.health.gov.on.ca/en/common/system/services/phu/locations.aspx"
            title="Ontario Public Health Units"
            target="_blank"
            rel="noopener noreferrer"
          >
            Public Health Units
          </a>
          . It represents the average number of people who become infected by an
          infectious person. If <Rt /> is above 1.0, the virus will spread
          quickly. When <Rt /> is below 1.0, the virus will stop spreading.
        </Typography>
      )}
    </Section>
  );
}

export default AboutRt;
