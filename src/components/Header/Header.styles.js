import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
  },
  logo: {
    width: '50px',
    height: '50px',
  },
  headerNav: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    fontFamily: 'InkInknut Antiqua, serif',
    width: '340px',
  },
}));

export default useStyles;
