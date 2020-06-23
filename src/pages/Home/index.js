import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Grid } from '@material-ui/core';

import Header from 'components/Header';
import { RiskList, Line } from 'components/charts/';
import Loader from 'components/Loader';
import Section from 'components/Section';
import Legend from 'components/charts/Legend';
import AboutRt from 'components/AboutRt';

import { getModelResults } from 'store/actions';

import useStyles from './Home.styles';

const Badge = ({ children }) => (
  <div
    style={{
      background: 'rgba(0, 119, 191, 0.12)',
      borderRadius: 5,
      margin: '16px 0',
      padding: '12px 6px',
      width: 'max-content',
      color: 'rgb(0, 119, 191)',
    }}
  >
    {children}
  </div>
);

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const provinces = useSelector((state) => state.data?.canada?.provinces);

  const lastUpdatedTimestamp = useSelector(
    (state) => state.data?.lastUpdatedTimestamp
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
      <AboutRt locale="Canada 🇨🇦" />
      <Section>
        <Badge>
          <Typography variant="body2">
            Data last updated: {lastUpdatedTimestamp}
          </Typography>
        </Badge>
        <div className={classes.barChartWrapper}>
          {canRender(provinces) ? <Line data={provinces} /> : <Loader />}
        </div>
        <Legend />
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
