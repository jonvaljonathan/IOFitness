import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import PropTypes from 'prop-types';
import { Howl } from 'howler';

import sound1 from '../../public/sounds/hero1.mp3';

export default function WorkoutTimer({ timerProps }) {
  // liveGroup props
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
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={isPlaying}
      duration={liveGroup.duration}
      colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
      onComplete={() => {
        updateLiveGroup(1);
        sound.play();
        handleKey();
        return [true, 1000];
      }}
    >
      {renderTime}
    </CountdownCircleTimer>
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
