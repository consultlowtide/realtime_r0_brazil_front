import React from 'react';
import Link from '@material-ui/core/Link';

import Typography from 'components/Typography';
import useStyles from './Footer.styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.container}>
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
        <Typography className={classes.sectionTitle} variant="h4">
          Resources
        </Typography>

        <Typography className={classes.sectionTitle} variant="h5">
          rt-canada.ca
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              Download our
              <Link
                target="_blank"
                color="primary"
                href="https://docs.google.com/presentation/d/1J0xtMQH0LxN-ZEfnl8I4iooGofEp49fyqKIk69rMf1w/edit#slide=id.g71c335fc92_32_492"
              >
                Jupyter notebook
              </Link>{' '}
              to see how we're calculating...
            </Typography>
          </li>

          <li>
            <Typography variant="body1">
              Download{' '}
              <Link
                target="_blank"
                color="primary"
                href="https://docs.google.com/presentation/d/1J0xtMQH0LxN-ZEfnl8I4iooGofEp49fyqKIk69rMf1w/edit#slide=id.g71c335fc92_32_492"
              >
                calculated{' '}
                <em>
                  R<sub>t</sub>
                </em>{' '}
                values
              </Link>{' '}
              per province/territory....
            </Typography>
          </li>

          <li>
            <Typography variant="body1">
              <Link
                target="_blank"
                color="primary"
                href="https://docs.google.com/presentation/d/1J0xtMQH0LxN-ZEfnl8I4iooGofEp49fyqKIk69rMf1w/edit#slide=id.g71c335fc92_32_492"
              >
                National case count data{' '}
              </Link>{' '}
              from{' '}
              <Link
                target="_blank"
                color="primary"
                href="https://docs.google.com/presentation/d/1J0xtMQH0LxN-ZEfnl8I4iooGofEp49fyqKIk69rMf1w/edit#slide=id.g71c335fc92_32_492"
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
                href="https://docs.google.com/presentation/d/1J0xtMQH0LxN-ZEfnl8I4iooGofEp49fyqKIk69rMf1w/edit#slide=id.g71c335fc92_32_492"
              >
                GitHub repository
              </Link>{' '}
              with the front end of this project.
            </Typography>
          </li>
        </ul>
        <Typography className={classes.sectionTitle} variant="h5">
          rt.live
        </Typography>

        <Typography className={classes.sectionTitle} variant="h5">
          loft.science
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              <Link
                target="_blank"
                color="primary"
                href="https://docs.google.com/presentation/d/1J0xtMQH0LxN-ZEfnl8I4iooGofEp49fyqKIk69rMf1w/edit#slide=id.g71c335fc92_32_492"
              >
                Base Case
              </Link>{' '}
              and Loft{' '}
              <Link
                target="_blank"
                color="primary"
                href="https://docs.google.com/presentation/d/1OeQuD0zuU5FcOUGWxkidCvFDloHuMa9zs03iTW2QjCM/edit#slide=id.g714b42d86c_6_298"
              >
                Action Plan
              </Link>
              , released to the community
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <Link
                target="_blank"
                color="primary"
                href="https://docs.google.com/document/d/1PvR_dI5L_5mhjDWovgIgkkSMtFFHFQ9bRYCY9hx30ZE/edit?ts=5e6a7c6f"
              >
                Warzoom
              </Link>{' '}
              Loft with all internal policies, updated daily
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              COVID-19 modeling{' '}
              <Link
                target="_blank"
                color="primary"
                href="https://docs.google.com/document/d/1c8U-eZSZQwr8m3KifQBndBOv0WlDDJ9aD0VPYATe3cg/edit#heading=h.gkvqnzw9i612"
              >
                reports
              </Link>{' '}
              from the Loft data science team
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <Link
                target="_blank"
                color="primary"
                href="https://github.com/loft-br/realtime_r0_brazil"
              >
                GitHub repository
              </Link>{' '}
              with the front end of this project{' '}
              <em>
                R<sub>t</sub>
              </em>
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Kevin Systrom's{' '}
              <Link
                target="_blank"
                color="primary"
                href="https://github.com/k-sys/covid-19/blob/master/Realtime%20R0.ipynb"
              >
                Jupyter notebook
              </Link>{' '}
              with his methodology for calculating{' '}
              <em>
                R<sub>t</sub>
              </em>{' '}
            </Typography>
          </li>
        </ul>
      </div>
      <div className={classes.section}>
        <Typography className={classes.sectionTitle} variant="h4">
          Known limitations of the methodology
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              A relevant note: our database ...
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              There is a delay between contracting the disease and testing
              positive. This is not reflected in these figures. Actual{' '}
              <em>
                R<sub>t</sub>
              </em>{' '}
              values may be delayed by a few days.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Tentamos fazer a estimativa de{' '}
              <em>
                R<sub>t</sub>
              </em>{' '}
              da melhor forma possível. Mesmo que este seja o caso, é impossível
              fazê-lo com perfeição. Pedimos para que levem isto em
              consideração.
            </Typography>
          </li>
        </ul>
      </div>
      <div className={classes.section}>
        <Typography className={classes.sectionTitle} variant="h4">
          Credits
        </Typography>
        <Typography variant="body1">
          Analysis by{' '}
          <Link
            target="_blank"
            color="primary"
            href="https://www.linkedin.com/in/gdmarmerola/"
          >
            Ivan Peng
          </Link>{' '}
        </Typography>
        <Typography>
          Built by{' '}
          <Link
            target="_blank"
            color="primary"
            href="https://www.linkedin.com/in/thiago-capelo-0156446a/"
          >
            Martin Laws
          </Link>
        </Typography>
        <Typography variant="body1">
          Designed by{' '}
          <Link
            target="_blank"
            color="primary"
            href="https://www.linkedin.com/in/flora-oliveira-37201b42/"
          >
            Ryan Neufeld
          </Link>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
