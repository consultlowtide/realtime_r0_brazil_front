import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  errorWrapper: {
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
    marginTop: 80,
  },
  badge: {
    background: 'rgba(0, 119, 191, 0.12)',
    borderRadius: 5,
    margin: '16px 0',
    padding: '12px 6px',
    width: 'max-content',
    color: 'rgb(0, 119, 191)',
    [theme.breakpoints.down('xs')]: {
      visibility: 'hidden',
    },
  },
  barChartWrapper: {
    width: '100%',
    position: 'relative',
    height: 500,
    overflowX: 'auto',
    overflowY: 'hidden',
    [theme.breakpoints.down('xs')]: {
      visibility: 'hidden',
    },
  },
  legend: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 65,
    marginTop: -30,
    marginBottom: 30,
  },
  colorIndicator: {
    display: 'inline-block',
    width: '23px',
    height: '8px',
    marginRight: 8,
  },
}));

export default useStyles;
