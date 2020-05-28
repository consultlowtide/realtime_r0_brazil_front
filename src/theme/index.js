import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff774a',
    },
    secondary: {
      main: '#20A483',
    },
    error: {
      main: '#E17272',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#191F23',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Inknut Antiqua, serif',
      fontSize: 24,
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'Inknut Antiqua, serif',
      fontSize: 20,
      fontWeight: 500,
    },
    h3: {
      fontFamily: 'Inknut Antiqua, serif',
    },
    h4: {
      fontFamily: 'Inknut Antiqua, serif',
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});

export default theme;
