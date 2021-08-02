import { createTheme } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';

// creates a thene that will be imported into pages/_app App higher order component

const theme = createTheme({
  palette: {
    primary: { main: blue[700] },
    secondary: { main: grey[700] },
    type: 'light',
  },
});

export default theme;
