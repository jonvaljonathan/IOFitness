import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import styleTimerControlButton from '../SharedStyles';

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: '16px',
    paddingBottom: '16px',
    // backgroundColor: theme.palette.button.default.info,
  },
}));
export default function TimerControl(props) {
  // liveGroup props
  const classes = useStyles();
  const { updateLiveGroup } = props;

  const { isPlaying } = props;
  const { pause } = props;
  const forward = () => {
    updateLiveGroup(1);
    isPlaying ? pause() : null;
  };

  const backward = () => {
    updateLiveGroup(-1);
    isPlaying ? pause() : null;
  };

  return (
    <div className={classes.container}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <IconButton variant="outlined" style={styleTimerControlButton} onClick={backward}>
            <ArrowBackIosIcon fontSize='large'/>
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <IconButton variant="outlined" style={styleTimerControlButton} onClick={pause}>
            {isPlaying ? <PauseCircleFilledIcon fontSize='large' /> : <PlayCircleFilledIcon fontSize='large'/>}
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <IconButton variant="outlined" style={styleTimerControlButton} onClick={forward}>
            <ArrowForwardIosIcon fontSize='large'/>
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
TimerControl.propTypes = {
  isPlaying: PropTypes.bool,
  pause: PropTypes.func,
  updateLiveGroup: PropTypes.func,
};

TimerControl.defaultProps = {
  isPlaying: false,
  pause: null,
  updateLiveGroup: null,
};
