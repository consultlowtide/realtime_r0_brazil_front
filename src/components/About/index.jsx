import React from 'react';
import Link from '@material-ui/core/Link';

import Typography from 'components/Typography';
import Rt from 'components/Rt';
import useStyles from './About.styles';

const About = () => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <div className={classes.section}>
        <div className={classes.section}>
          <Typography className={classes.sectionTitle} variant="h1">
            Resources
          </Typography>
        </div>
        <div className={classes.section}>
          <Typography className={classes.sectionTitle} variant="h2">
            What is <Rt />?
          </Typography>
          <Typography variant="body1">
            The metric being tracked here (
            <Rt />) represents the effective reproduction rate of COVID-19 in
            each location. The effective reproduction rate is the average number
            of new infections caused by a single infected individual at a
            specific period in time. It lets us estimate how many additional
            infections are likely to occur from a single infected person in a
            specific area. Values of 1.0 or greater mean that we should expect
            the number of cases to increase in that area, values under 1.0 means
            that we should expect a decline in the number of cases in that area.
          </Typography>
        </div>
        <div className={classes.section}>
          <Typography className={classes.sectionTitle} variant="h2">
            Calculating <Rt />
          </Typography>
          <Typography variant="body1">
            Our <Rt /> model for COVID-19 in Canada is an adaptation of
            loft.science's <Rt /> model for Brazil which an adaptation of Kevin
            Systrom and his team's model for the USA. We used the <Rt /> model
            from Brazil as a foundation because of the similarities between
            Canadian and Brazilian data sets which was adapted from the original
            American model. We’ve since improved the confidence and reliability
            of our model to parity with that of the American model.
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
          rt-canada.ca{' '}
          <span role="img" aria-label="Canadian flag emoji">
            🇨🇦
          </span>
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
              to see how we're calculating <Rt /> for Canada.
            </Typography>
          </li>

          <li>
            <Typography variant="body1">
              <Link
                target="_blank"
                color="primary"
                href="https://github.com/ishaberry/Covid19Canada/"
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
        <Typography className={classes.sectionTitle} variant="h2">
          rt.live{' '}
          <span role="img" aria-label="American flag emoji">
            🇺🇸
          </span>
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
              with their methodology for calculating <Rt />.
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

        <Typography className={classes.sectionTitle} variant="h2">
          loft.science{' '}
          <span role="img" aria-label="Brazillian flag emoji">
            🇧🇷
          </span>
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
              with their <Rt />
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
          </Link>
        </Typography>
        <Typography>
          Built by{' '}
          <Link
            target="_blank"
            color="primary"
            href="https://twitter.com/martinblaws"
          >
            Martin Laws
          </Link>
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
        </Typography>
      </div>
    </section>
  );
};

export default About;
