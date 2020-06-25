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
      alignItems: 'flex-end',
    },
  },
  underlineOnHover: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default useStyles;
