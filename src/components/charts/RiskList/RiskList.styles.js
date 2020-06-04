import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flex: 1,
    width: '100%',
    maxWidth: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 0 20px 10px',
    paddingRight: 10,
  },

  root: {
    [theme.breakpoints.up('md')]: {
      '& button': {
        opacity: 0,
        visibility: 'hidden',
      },
    },

    '&:hover button': {
      opacity: 1,
      visibility: 'visible',
      transition: 'opacity 0.5s ease-in-out',
    },
  },
}));

export default useStyles;
