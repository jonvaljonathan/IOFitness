import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export default function TimerControl(props) {
  // liveGroup props
  const { updateLiveGroup } = props;

  const { isPlaying } = props;
  const { pause } = props;
  const forward = () => {
    updateLiveGroup(1);
  };

  const backward = () => {
    updateLiveGroup(-1);
  };

  return (
    <div>
      <Button fullWidth variant="outlined" onClick={pause}>
        {isPlaying ? 'Pause' : 'Play'}
      </Button>
      <Button fullWidth variant="outlined" onClick={backward}>
        Prev Set!
      </Button>
      <Button fullWidth variant="outlined" onClick={forward}>
        Next Set!
      </Button>
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
