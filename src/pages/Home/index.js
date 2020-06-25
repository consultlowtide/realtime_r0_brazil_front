import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Grid } from '@material-ui/core';

import Header from 'components/Header';
import { RiskList, Line } from 'components/charts/';
import Loader from 'components/Loader';
import Section from 'components/Section';
import Legend from 'components/charts/Legend';
import AboutRt from 'components/AboutRt';
import MobileChartPlaceholder from 'components/charts/MobileChartPlaceholder';

import { getModelResults } from 'store/actions';

import useStyles from './Home.styles';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const provinces = useSelector((state) => state.data?.canada?.provinces);

  const lastUpdatedTimestamp = useSelector(
    (state) => state.data?.canada.lastUpdatedTimestamp
  );

  const canRender = useCallback(
    (data) => !error && !loading && data !== undefined && data !== null,
    [error, loading]
  );

  const getData = useCallback(async () => {
    try {
      await dispatch(getModelResults());
    } catch (e) {
      console.error(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <AboutRt locale="Canada" localeText="Canada by Province/Territory" />
      <Section>
        <Badge />
        <div className={classes.barChartWrapper}>
          {canRender(provinces) ? <Line data={provinces} /> : <Loader />}
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
          {canRender(provinces) ? <RiskList data={provinces} /> : <Loader />}
        </Grid>
      </Section>
    </>
  );
};

export default Home;
