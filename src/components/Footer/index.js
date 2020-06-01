import React from 'react';
import Link from '@material-ui/core/Link';

import Typography from 'components/Typography';
import useStyles from './Footer.styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.container}>
      <div className={classes.section}>
        <Typography className={classes.sectionTitle} variant="h4">
          Acknowledgements
        </Typography>
        <Typography variant="body1">
          Analysis by{' '}
          <Link
            target="_blank"
            color="primary"
            href="https://github.com/ivanpeng"
          >
            Ivan Peng
          </Link>{' '}
        </Typography>
        <Typography>
          Built by{' '}
          <Link
            target="_blank"
            color="primary"
            href="https://github.com/martinlaws"
          >
            Martin Laws
          </Link>
        </Typography>
        <Typography variant="body1">
          Designed by{' '}
          <Link
            target="_blank"
            color="primary"
            href="https://www.linkedin.com/in/iamryanneufeld/"
          >
            Ryan Neufeld
          </Link>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
