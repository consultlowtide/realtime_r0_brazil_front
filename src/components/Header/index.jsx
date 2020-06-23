import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './Header.styles';

function Header() {
  const classes = useStyles();

  return (
    <>
      <header className={classes.header}>
        <div>logo</div>
        <nav>
          <Link to="/canada">Canada</Link> <Link to="/ontario">Ontario</Link>{' '}
          <Link to="/resources">Resources</Link>{' '}
        </nav>
      </header>
    </>
  );
}

export default Header;
