import { createMuiTheme } from '@material-ui/core/styles';
import { grey, green, red } from '@material-ui/core/colors';

const Theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: white[500],
  //   },
  //   secondary: {
  //     main: blue[800],
  //   },
  // },
  overrides: {
    MuiTypography: {
      colorPrimary: {
        color: '#000000',
      },
      colorSecondary: {
        color: grey[700]
      }
    },
  },
  typography: {
    useNextVariants: true,
  },
  appWidth: {
    width: '100%',
    maxWidth: 1280,
    paddingLeft: 12,
    paddingRight: 12,
  },
  greenText: {
    color: green[600]
  },
  greenButton: {
    backgroundColor: green[600]
  },
  greenBackground: {
    backgroundColor: green[600]
  },
  greenBorder: {
    borderColor: green[600]
  },
  redBorder: {
    borderColor: red[600]
  }
});

export default Theme;