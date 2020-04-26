import React from 'react';

import { Typography } from '@material-ui/core';
import { CANADIAN_PROVINCES } from 'utils';
import Tooltip from 'components/charts/Tooltip';

const TooltipLine = ({ data }) => (
  <Tooltip data={data}>
    <Typography variant="caption">
      <strong>{CANADIAN_PROVINCES[data?.province]}</strong>
    </Typography>
  </Tooltip>
);

export default TooltipLine;
