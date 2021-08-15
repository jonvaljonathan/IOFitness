import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
}));

export default function WeightLifted() {
  const classes = useStyles();
  // liveGroup props
  return (
    <Paper style={{height:'100%'}}>
      <Typography variant="h4">Total Weight Lifted: </Typography>
    </Paper>
  );
}
