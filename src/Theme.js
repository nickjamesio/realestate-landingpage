import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

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
  appWidth: {
    width: '100%',
    maxWidth: 1280,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default Theme;