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
          <Typography className={classes.sectionTitle} variant="h4">
            What is{' '}
            <em>
              R<sub>t</sub>
            </em>{' '}
            and how do we calculate it?
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
        <Typography className={classes.sectionTitle} variant="h4">
          About the Data
        </Typography>
        <Typography variant="body1">
          The COVID-19 Canada Open Data Working Group collects information on
          confirmed and presumptive positive cases of COVID-19 in Canada. Each
          line in their dataset represents a unique case. Data is entered
          manually and updated daily. All data is exclusively collected from
          publicly available sources including government reports, government
          websites, and news media.
          <em>
            R<sub>t</sub>
          </em>{' '}
          values may be delayed by a few days.
        </Typography>
      </div>
        <Typography className={classes.sectionTitle} variant="h4">
          Resources
        </Typography>

        <Typography className={classes.sectionTitle} variant="h5">
          rt-canada.ca
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              Download our{' '}
              <Link target="_blank" color="primary" href="#">
                Jupyter notebook
              </Link>{' '}
              to see how we're calculating{' '}
              <em>
                R<sub>t</sub>
              </em>{' '}
              for Canada
            </Typography>
          </li>

          <li>
            <Typography variant="body1">
              Download{' '}
              <Link target="_blank" color="primary" href="#">
                calculated{' '}
                <em>
                  R<sub>t</sub>
                </em>{' '}
                values
              </Link>{' '}
              per province/territory
            </Typography>
          </li>

          <li>
            <Typography variant="body1">
              <Link
                target="_blank"
                color="primary"
                href="https://raw.githubusercontent.com/ishaberry/Covid19Canada/master/cases.csv"
              >
                National case count data{' '}
              </Link>{' '}
              from{' '}
              <Link
                target="_blank"
                color="primary"
                href="https://www.cmaj.ca/content/192/15/E420"
              >
                COVID-19 Canada Open Data Working Group{' '}
              </Link>{' '}
            </Typography>
          </li>

          <li>
            <Typography variant="body1">
              <Link
                target="_blank"
                color="primary"
                href="https://github.com/consultlowtide/rt-canada"
              >
                GitHub repository
              </Link>{' '}
              with the front end code for this site.
            </Typography>
          </li>
        </ul>
        <Typography className={classes.sectionTitle} variant="h5">
          <Link target="_blank" href="https://rt.live">
            rt.live
          </Link>{' '}
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              <Link
                target="_blank"
                color="primary"
                href="https://twitter.com/kevin"
              >
                Kevin Systrom
              </Link>{' '}
              and{' '}
              <Link
                target="_blank"
                color="primary"
                href="https://twitter.com/tvladeck"
              >
                Thomas Vladeck
              </Link>
              's{' '}
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
            </Typography>
          </li>
        </ul>

        <Typography className={classes.sectionTitle} variant="h5">
          <Link target="_blank" href="https://loft.science">
            loft.science
          </Link>{' '}
        </Typography>
        <ul>
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
              calculation methodology for Brazil{' '}
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
              with their front end code for{' '}
              <Link target="_blank" color="primary" href="https://loft.science">
                loft.science
              </Link>{' '}
            </Typography>
          </li>
        </ul>
      </div>
      <div className={classes.section}>
        <Typography className={classes.sectionTitle} variant="h4">
          About the Data
        </Typography>
        <Typography variant="body1">
          The COVID-19 Canada Open Data Working Group collects information on
          confirmed and presumptive positive cases of COVID-19 in Canada. Each
          line in their dataset represents a unique case. Data is entered
          manually and updated daily. All data is exclusively collected from
          publicly available sources including government reports, government
          websites, and news media.
          <em>
            R<sub>t</sub>
          </em>{' '}
          values may be delayed by a few days.
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography className={classes.sectionTitle} variant="h4">
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
        </Typography>
        <Typography variant="body1">
          Designed by{' '}
          <Link
            target="_blank"
            color="primary"
            href="https://www.linkedin.com/in/iamryanneufeld/"
          >
            Ryan Neufeld
          </Link>
        </Typography>
      </div>
    </section>
  );
};

export default About;
