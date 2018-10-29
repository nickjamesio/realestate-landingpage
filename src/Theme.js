import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: white[500],
  //   },
  //   secondary: {
  //     main: blue[800],
  //   },
  // },
  // overrides: {
  //   MuiTypography: {
  //     colorPrimary: {
  //       color: '#5A5A5A',
  //     },
  //   },
  // },
  appWidth: {
    width: '100%',
    maxWidth: 1280,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default Theme;