import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexFlow: 'nowrap',
  },
  section: {
    marginBottom: theme.spacing(5),
  },
}));

export default useStyles;
