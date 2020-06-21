import React from 'react';
import Rt from 'components/Rt';
import { Typography } from '@material-ui/core';

import useStyles from './Legend.styles';

const Legend = () => {
  const classes = useStyles();

  const ColorIndicator = ({ backgroundColor }) => (
    <div className={classes.colorIndicator} style={{ backgroundColor }} />
  );

  return (
    <div className={classes.legend}>
      <div>
        <ColorIndicator backgroundColor="#FFDAD2" />{' '}
        <Typography variant="caption" style={{ marginRight: 16 }}>
          90% Confidence Interval, <Rt /> &gt;= 1
        </Typography>
        <ColorIndicator backgroundColor="#C7F5C0" />{' '}
        <Typography variant="caption">
          90% Confidence Interval, <Rt /> &lt; 1
        </Typography>
      </div>
    </div>
  );
};

export default Legend;
