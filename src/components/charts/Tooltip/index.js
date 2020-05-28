import React from 'react';

import { Typography, Paper } from '@material-ui/core';
import Rt from 'components/Rt';
import Thumb from 'components/Thumb';

import useStyles from './Tooltip.styles';
import { CANADIAN_PROVINCES } from 'utils';

const RED = '#f9e7e7';
const GREEN = '#c3f5c3';

const Tooltip = ({ children, data = {} }) => {
  const classes = useStyles();
  const getColor = (number) => (number < 1 ? GREEN : RED);
  const rtValue = () => data?.yFormatted || data?.y;

  return (
    <Paper variant="outlined" elevation={3} className={classes.root}>
      {children}
      <Typography variant="caption">
        <strong>{CANADIAN_PROVINCES[data?.province]}</strong>
      </Typography>
      <Typography variant="caption">{rtValue().toFixed(2)}</Typography>
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
