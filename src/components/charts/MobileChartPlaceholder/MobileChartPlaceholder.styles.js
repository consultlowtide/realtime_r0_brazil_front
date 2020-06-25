import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mobileChartPlaceholder: {
    height: '500px',
    width: '95%',
    border: '1px solid #ddd',
    borderRadius: '7px',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      visibility: 'hidden',
    },
  },
}));

export default useStyles;
