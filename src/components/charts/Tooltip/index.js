import React from 'react';

import { Typography, Paper } from '@material-ui/core';

import useStyles from './Tooltip.styles';
import { CANADIAN_PROVINCES } from 'utils';

const RED = '#E64F40';
const GREEN = '#3CB66C';

const Tooltip = ({ data = {}, date }) => {
  const classes = useStyles();
  const getColor = (number) => (number.toFixed(2) >= 1 ? RED : GREEN);
  const rtValue = () => data?.yFormatted || data?.y;

  return (
    <Paper variant="outlined" elevation={3} className={classes.root}>
      <Typography variant="subtitle1">
        <strong>
          {CANADIAN_PROVINCES[data?.province]}{' '}
          <span style={{ color: getColor(rtValue()) }}>
            {rtValue().toFixed(2)}
          </span>
        </strong>
      </Typography>
      <Typography variant="caption">
        Max:{' '}
        <span style={{ color: getColor(data?.high) }}>
          {data?.high.toFixed(2)}
        </span>
      </Typography>
      <br />
      <Typography variant="caption">
        Min:{' '}
        <span style={{ color: getColor(data?.low) }}>
          {data?.low.toFixed(2)}
        </span>
      </Typography>
      <br />
      <Typography variant="caption">{date}</Typography>
    </Paper>
  );
};

export default Tooltip;
