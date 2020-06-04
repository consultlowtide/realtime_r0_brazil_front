import React from 'react';

import { Typography, Paper } from '@material-ui/core';

import useStyles from './Tooltip.styles';
import { CANADIAN_PROVINCES } from 'utils';

const RED = 'rgb(230, 79, 64)';
const GREEN = 'rgb(60, 182, 108)';

const Tooltip = ({ children, data = {} }) => {
  const classes = useStyles();
  const getColor = (number) => (number < 1 ? GREEN : RED);
  const rtValue = () => data?.yFormatted || data?.y;

  return (
    <Paper variant="outlined" elevation={3} className={classes.root}>
      {children}
      <Typography variant="subtitle">
        <strong>
          {CANADIAN_PROVINCES[data?.province]}{' '}
          <span style={{ color: getColor(rtValue()) }}>
            {rtValue().toFixed(2)}
          </span>
        </strong>
      </Typography>
      <br />
      <Typography variant="caption">
        High:{' '}
        <span style={{ color: getColor(data?.high) }}>
          {data?.high.toFixed(2)}
        </span>
      </Typography>
      <br />
      <Typography variant="caption">
        Low:{' '}
        <span style={{ color: getColor(data?.low) }}>
          {data?.low.toFixed(2)}
        </span>
      </Typography>
    </Paper>
  );
};

export default Tooltip;
