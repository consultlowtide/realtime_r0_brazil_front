import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Grid } from '@material-ui/core';

import Header from 'components/Header';
import { RiskList, Line } from 'components/charts/';
import Loader from 'components/Loader';
import Section from 'components/Section';
import Legend from 'components/charts/Legend';
import AboutRt from 'components/AboutRt';
import MobileChartPlaceholder from 'components/charts/MobileChartPlaceholder';

import useStyles from './Ontario.styles';

const Ontario = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const regions = useSelector((state) => state.data?.ontario?.regions);

  const lastUpdatedTimestamp = useSelector(
    (state) => state.data?.lastUpdatedTimestamp
  );

  const canRender = useCallback(
    (data) => !error && !loading && data !== undefined && data !== null,
    [error, loading]
  );

  const Badge = () => (
    <div className={classes.badge}>
      <Typography variant="body2">
        Data last updated: {lastUpdatedTimestamp}
      </Typography>
    </div>
  );

  if (error) {
    return (
      <div className={classes.errorWrapper}>
        <Typography variant="h5">Uh oh!</Typography>
        <Typography variant="h6">Something has gone wrong.</Typography>
      </div>
    );
  }

  return (
    <>
      <Header />
      <AboutRt locale="Ontario" />
      <Section>
        <Badge>
          <Typography variant="body2">
            Data last updated: {lastUpdatedTimestamp}
          </Typography>
        </Badge>
        <div className={classes.barChartWrapper}>
          {canRender(regions) ? <Line data={regions} /> : <Loader />}
          <Legend />
        </div>
        <MobileChartPlaceholder />
      </Section>
      <Section>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={4}
        >
          {canRender(regions) ? <RiskList data={regions} /> : <Loader />}
        </Grid>
      </Section>
    </>
  );
};

export default Ontario;
