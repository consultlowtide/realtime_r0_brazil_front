import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  errorWrapper: {
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
    marginTop: 80,
  },
  barChartWrapper: {
    // display: 'flex',
    width: '100%',
    position: 'relative',
    height: 500,
    overflowX: 'auto',
    overflowY: 'hidden',
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
