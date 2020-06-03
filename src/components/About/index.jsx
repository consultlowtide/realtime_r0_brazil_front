import React from 'react';
import Link from '@material-ui/core/Link';

import Typography from 'components/Typography';
import useStyles from './About.styles';

const About = () => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <div className={classes.section}>
        <div className={classes.section}>
          <Typography className={classes.sectionTitle} variant="h2">
            What is{' '}
            <em>
              R<sub>t</sub>
            </em>{' '}
            ?
          </Typography>
          <Typography variant="body1">
            The metric being tracked here (
            <em>
              R<sub>t</sub>
            </em>{' '}
            ) represents the effective reproduction rate of COVID-19 calculated
            for each locale. It lets us estimate how many secondary infections
            are likely to occur from a single infection in a specific area.
            Values over 1.0 mean we should expect more cases in that area,
            values under 1.0 mean we should expect fewer.
          </Typography>
        </div>
        <div className={classes.section}>
          <Typography className={classes.sectionTitle} variant="h2">
            Calculating{' '}
            <em>
              R<sub>t</sub>
            </em>{' '}
          </Typography>
          <Typography variant="body1">
            Our
            <em>
              R<sub>t</sub>
            </em>{' '}
            model for COVID-19 in Canada is an adaptation of loft.science's
            <em>
              R<sub>t</sub>
            </em>{' '}
            model for Brazil which an adaptation of Kevin Systrom and his team's
            model for the USA. We used the
            <em>
              R<sub>t</sub>
            </em>{' '}
            model from Brazil as a foundation because of the similarities
            between Canadian and Brazilian data sets which was adapted from the
            original American model. We’ve since improved the confidence and
            reliability of our model to parity with that of the American model.
          </Typography>
        </div>
        <div className={classes.section}>
          <Typography className={classes.sectionTitle} variant="h2">
            Wait Why Isn’t My Province/Territory Listed?
          </Typography>
          <Typography variant="body1">
            Canada is a HUGE country and some areas are sparsely populated
            compared to other parts of North America. If your province or
            territory isn’t listed that’s because we don’t have enough data from
            your particular region to make make a statistical prediction we can
            feel confident about.
          </Typography>
        </div>
        <div className={classes.section}>
          <Typography className={classes.sectionTitle} variant="h2">
            About the Data
          </Typography>
          <Typography variant="body1">
            The COVID-19 Canada Open Data Working Group collects information on
            confirmed and presumptive positive cases of COVID-19 in Canada. Each
            line in their dataset represents a unique case. Data is entered
            manually and updated daily. All data is exclusively collected from
            publicly available sources including government reports, government
            websites, and news media.
          </Typography>
        </div>
        <Typography className={classes.sectionTitle} variant="h2">
          Resources
        </Typography>
        <Typography className={classes.sectionTitle} variant="h5">
          rt-canada.ca 🇨🇦
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              Download our{' '}
              <Link
                target="_blank"
                color="primary"
                href="https://github.com/ivanpeng/rt_covid_ca/blob/master/notebooks/RT-CA%20MCMC.ipynb"
              >
                Jupyter notebook
              </Link>{' '}
              to see how we're calculating{' '}
              <em>
                R<sub>t</sub>
              </em>{' '}
              for Canada.
            </Typography>
          </li>

          <li>
            <Typography variant="body1">
              <Link
                target="_blank"
                color="primary"
                href="https://raw.githubusercontent.com/ishaberry/Covid19Canada/master/cases.csv"
              >
                National case count data
              </Link>{' '}
              from the{' '}
              <Link
                target="_blank"
                color="primary"
                href="https://www.cmaj.ca/content/192/15/E420"
              >
                COVID-19 Canada Open Data Working Group
              </Link>{' '}
              .
            </Typography>
          </li>

          <li>
            <Typography variant="body1">
              <Link
                target="_blank"
                color="primary"
                href="https://github.com/consultlowtide/rt-canada"
              >
                Our GitHub repository
              </Link>{' '}
              with the front end code for this site.
            </Typography>
          </li>
        </ul>
        <Typography className={classes.sectionTitle} variant="h5">
          rt.live 🇺🇸
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              Check out{' '}
              <Link target="_blank" color="primary" href="https://rt.live/">
                rt.live
              </Link>
              .
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Kevin Systrom and Thomas Vladeck's{' '}
              <Link
                target="_blank"
                color="primary"
                href="https://github.com/k-sys/covid-19/blob/master/Realtime%20Rt%20mcmc.ipynb"
              >
                Jupyter notebook
              </Link>{' '}
              with their methodology for calculating{' '}
              <em>
                R<sub>t</sub>
              </em>
              .
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <Link
                target="_blank"
                color="primary"
                href="http://systrom.com/blog/the-metric-we-need-to-manage-covid-19/"
              >
                The Metric We Need to Manage COVID-19
              </Link>
              .
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <Link
                target="_blank"
                color="primary"
                href="http://systrom.com/blog/the-numbers-behind-social-distancing/"
              >
                The Numbers Behind Social Distancing
              </Link>
              .
            </Typography>
          </li>
        </ul>

        <Typography className={classes.sectionTitle} variant="h5">
          loft.science 🇧🇷
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              Check out{' '}
              <Link
                target="_blank"
                color="primary"
                href="https://loft.science/"
              >
                loft.science
              </Link>
              .
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Loft's{' '}
              <Link
                target="_blank"
                color="primary"
                href="https://github.com/loft-br/realtime_r0_brazil"
              >
                GitHub repository
              </Link>{' '}
              with their{' '}
              <em>
                R<sub>t</sub>
              </em>{' '}
              calculation methodology for Brazil.{' '}
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Loft's{' '}
              <Link
                target="_blank"
                color="primary"
                href="https://github.com/loft-br/realtime_r0_brazil"
              >
                GitHub repository
              </Link>{' '}
              with their front end code for loft.science.{' '}
            </Typography>
          </li>
        </ul>
      </div>
      <div className={classes.section}>
        <Typography className={classes.sectionTitle} variant="h2">
          Acknowledgements
        </Typography>
        <Typography variant="body1">
          Analysis by{' '}
          <Link
            target="_blank"
            color="primary"
            href="https://github.com/ivanpeng"
          >
            Ivan Peng
          </Link>{' '}
          .
        </Typography>
        <Typography>
          Built by{' '}
          <Link
            target="_blank"
            color="primary"
            href="https://github.com/martinlaws"
          >
            Martin Laws
          </Link>
          .
        </Typography>
        <Typography variant="body1">
          Designed by{' '}
          <Link
            target="_blank"
            color="primary"
            href="http://ryanneufeld.design/"
          >
            Ryan Neufeld
          </Link>
          .
        </Typography>
      </div>
    </section>
  );
};

export default About;
