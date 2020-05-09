import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Grid } from '@material-ui/core';

import { RiskList, Line } from 'components/charts/';
import Loader from 'components/Loader';
import Section from 'components/Section';

import { getModelResults } from 'store/actions';

import useStyles from './Home.styles';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const provinces = useSelector((state) => state.data?.provinces);

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
      <Section>
        <div className={classes.barChartWrapper}>
          {canRender(provinces) ? <Line data={provinces} /> : <Loader />}
        </div>
      </Section>
      <Section
        title="<em>R<sub>t</sub></em> em tempo real por UF"
        description="Nosso modelo produz uma estimativa de <em>R<sub>t</sub></em> para cada um dos estados brasileiros, com um intervalo crível de 90% de probabilidade. Nos gráficos a seguir, mostramos a estimativa para cada estado. No eixo vertical temos a estimativa de <em>R<sub>t</sub></em> ao longo do tempo. Os pontos são as estimativas, enquanto a sombra significa todos os possíveis valores de <em>R<sub>t</sub></em> em determinada data (intervalo crível). Somente se o <em>R<sub>t</sub></em> for menor do que 1, a epidemia irá diminuir de tamanho até ser eliminada."
      >
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
