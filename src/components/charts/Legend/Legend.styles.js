import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
