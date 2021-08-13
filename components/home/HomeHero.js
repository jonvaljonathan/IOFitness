import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { styleRaisedButton } from '../SharedStyles';

const useStyles = makeStyles((theme) => ({
  HomeHero: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    padding: '5%',
  },
  h1: {
    align: 'center',
    color: 'white',
  },
  h2: {
    color: 'secondary',
  },
  Button: {
    ...styleRaisedButton,
    // backgroundColor: theme.palette.button.default.info,
  },
}));
export default function HomeHero() {
  const classes = useStyles();
  // liveGroup props
  return (
    <Box className={classes.HomeHero}>
      <Typography variant="h1">IO Fitness</Typography>
      <h2 className={classes.h2}>Start small. Go Big.</h2>
      <Button style={styleRaisedButton} href="/api/auth/login">
        Log In or Create an Account
      </Button>
    </Box>
  );
}
