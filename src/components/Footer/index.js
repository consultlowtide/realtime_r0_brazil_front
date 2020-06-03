import React from 'react';

import Typography from 'components/Typography';
import useStyles from './Footer.styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.container}>
      <div className={classes.section}>
        <Typography variant="body1" align="right">
          Made in Toronto and San Francisco with{' '}
          <span role="img" aria-label="heart, maple leaf, and pancake emojis">
            ❤️🍁🥞
          </span>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
