import React from 'react';

import { Typography } from '@material-ui/core';
import { formatDate } from 'utils';
import Tooltip from 'components/charts/Tooltip';

const TooltipScatter = ({ data }) => (
  <Tooltip data={data} date={formatDate(data?.date)} />
);

export default TooltipScatter;
