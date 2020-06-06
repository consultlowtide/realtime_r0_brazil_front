import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#004CF5',
    },
    secondary: {
      main: '#3CB6BC',
    },
    error: {
      main: '#E64F40',
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
      fontSize: 36,
      fontWeight: 400,
      color: 'rgba(0, 0, 0, 0.87)',
    },
    h2: {
      fontFamily: 'Inknut Antiqua, serif',
      fontSize: 24,
      fontWeight: 400,
      color: 'rgba(0, 0, 0, 0.87)',
    },
    h3: {
      fontFamily: 'IBM Plex Sans, sans-serif',
      fontSize: 20,
      fontWeight: 600,
      color: 'rgb(60, 182, 108)',
    },
    h4: {
      fontFamily: 'Inknut Antiqua, serif',
      fontSize: 20,
      fontWeight: 500,
      color: 'rgba(0, 0, 0, 0.87)',
    },
    h5: {
      fontFamily: 'Inknut Antiqua, serif',
      fontSize: 16,
      fontWeight: 600,
      color: 'rgba(0, 0, 0, 0.87)',
    },
    subtitle1: {
      fontFamily: 'IBM Plex Sans, sans-serif',
      fontSize: 14,
      fontWeight: 500,
      color: 'rgba(0, 0, 0, 0.87)',
    },
    body1: {
      fontFamily: 'IBM Plex Sans, sans-serif',
      fontSize: 16,
      fontWeight: 400,
      color: 'rgba(0, 0, 0, 0.87)',
    },
    body2: {
      fontFamily: 'IBM Plex Sans, sans-serif',
      fontSize: 14,
      fontWeight: 400,
      color: 'rgb(0, 119, 191)',
    },
    caption: {
      fontFamily: 'IBM Plex Sans, sans-serif',
      fontSize: 12,
      fontWeight: 400,
      color: 'rgb(119, 118, 119)',
    },
    overline: {
      fontFamily: 'IBM Plex Sans, sans-serif',
      fontSize: 10,
      fontWeight: 300,
      color: 'rgb(60, 182, 108)',
    },
  },
});

export default theme;
