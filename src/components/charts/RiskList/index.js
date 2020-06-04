import React, { memo } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { getLastRtValue, formatListData, CANADIAN_PROVINCES } from 'utils';

import { RiskScatterPlot } from 'components/charts';

import useStyles from './RiskList.styles';

const RiskList = ({ data: content }) => {
  const rtData = formatListData(content);

  const chartActive = 'rt';

  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={4}
      >
        {Object.keys(rtData).map((id) => (
          <Grid
            container
            alignItems="center"
            direction="column"
            item
            key={id}
            lg={3}
            xs
          >
            <BoxChart chartActive={chartActive} rtData={rtData} id={id} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const BoxChart = ({
  chartActive,
  id,
  newCases,
  newDeaths,
  rtData,
  smoothedCases,
  smoothedDeaths,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Typography variant="h4">{CANADIAN_PROVINCES[id]}</Typography>
        <Typography
          variant="h3"
          color={getLastRtValue(rtData, id) < 1 ? 'secondary' : 'error'}
        >
          <strong>{getLastRtValue(rtData, id)}</strong>
        </Typography>
      </header>
      {
        {
          rt: <RiskScatterPlot data={[{ id, data: rtData[id] }]} />,
        }[chartActive || 'rt']
      }
    </div>
  );
};

export default memo(RiskList);
