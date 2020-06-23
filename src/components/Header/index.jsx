import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import useStyles from './Header.styles';

function Header() {
  const classes = useStyles();

  return (
    <>
      <header className={classes.header}>
        <Link to="/">
          <img
            src="https://rt-canada.ca/Instagram_Square.png"
            alt="Rt Canada Logo"
            className={classes.logo}
          />
        </Link>
        <nav className={classes.headerNav}>
          <Link to="/">
            <Typography variant="h4">Canada</Typography>
          </Link>{' '}
          <Link to="/ontario">
            <Typography variant="h4">Ontario</Typography>
          </Link>{' '}
          <Link to="/resources">
            {' '}
            <Typography variant="h4">Resources</Typography>
          </Link>{' '}
        </nav>
      </header>
    </>
  );
}

export default Header;
