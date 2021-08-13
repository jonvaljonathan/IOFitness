import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import PropTypes from 'prop-types';
import { Howl } from 'howler';
import { makeStyles } from '@material-ui/core';
import sound1 from '../../public/sounds/hero1.mp3';

const useStyles = makeStyles({
  container: {
    paddingTop: '16px',
    paddingBottom: '16px',
    // backgroundColor: theme.palette.button.default.info,
  },
});

export default function WorkoutTimer({ timerProps }) {
  // liveGroup props
  const classes = useStyles();
  const { updateLiveGroup } = timerProps;
  const { liveGroup } = timerProps;

  const { isPlaying } = timerProps;
  const { key } = timerProps;
  const { handleKey } = timerProps;

  const sound = new Howl({
    src: [sound1],
    volume: 1,
    onend() {},
  });
  // console.log(duration);
  // timer settings
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Next Set!</div>;
    }
    return (
      <div className="timer">
        <div className="value">{remainingTime}</div>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <CountdownCircleTimer
        key={key}
        isPlaying={isPlaying}
        duration={liveGroup.duration}
        colors={[['#80d8ff', 0.33], ['#69f0ae', 0.33], ['#80d8ff']]}
        onComplete={() => {
          updateLiveGroup(1);
          sound.play();
          handleKey();
          return [true, 1000];
        }}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}
WorkoutTimer.propTypes = {
  timerProps: PropTypes.shape({
    updateLiveGroup: PropTypes.func,
    isPlaying: PropTypes.bool,
    key: PropTypes.number,
    handleKey: PropTypes.func,
    duration: PropTypes.number,
    liveGroup: PropTypes.shape({
      groupNum: PropTypes.number,
      exerciseIndex: PropTypes.number,
      workOrRest: PropTypes.string,
      setNumber: PropTypes.number,
      totalSets: PropTypes.number,
      duration: PropTypes.number,
      exercise: PropTypes.object,
    }),
  }),
};

WorkoutTimer.defaultProps = {
  timerProps: PropTypes.shape({
    updateLiveGroup: null,
    isPlaying: false,
    key: 1,
    handleKey: null,
    duration: 10,
  }),
};
