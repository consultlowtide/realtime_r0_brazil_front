import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: '16px',
  },
  headerNav: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    fontFamily: 'InkInknut Antiqua, serif',
    width: '340px',
    [theme.breakpoints.down('xs')]: {
      flexFlow: 'column nowrap',
      alignItems: 'flex-start',
      marginTop: '16px',
    },
  },
  navLink: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '8px 0',
    },
  },
}));

export default useStyles;
