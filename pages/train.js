/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Layout from '../components/layout';
import ExerciseCard from '../components/train/ExerciseCard';
import WorkoutTimer from '../components/train/SessionTimer';
import TimerControl from '../components/train/TimerControl';
import SoundButton from '../components/train/SoundButton';
import SessionTableForm from '../components/train/SessionTableForm';
import { executeTimerLogic } from '../lib/trainPage/timerLogic';
import { serverSideHandler } from '../lib/serverSideHandler/serverSideHandler';
/* 
need to:
- write a map function that creates
  
Problems to fix:
- need to write some logic for increasing reps and resistance - find my rules
  - 2x2
  - increase a rep until you hit strength, hypertrophy, endurance threshold
  - then increase resistance
  - rules for isometric exercises
  - rest week
- then create a final-ish data model
- load in my workout x 2
- get ui working
- save and create next workout / training session  


*/
function Train(props) {
  const loading = false;

  const { user } = useUser();
  const { localUser, trainingSession } = props;

  const { exercises: dbExcercises } = trainingSession;

  const groupedExercises = dbExcercises.reduce((acc, exercise) => {
    const { groupNumber, totalSets } = exercise;
    const { exercises: currExercise = [] } = acc[groupNumber] || [];
    return {
      ...acc,
      [groupNumber]: {
        totalSets,
        exercises: [...currExercise, exercise],
      },
    };
  }, {});

  const [liveGroup, setLiveGroup] = useState({
    groupNum: 1,
    exerciseIndex: 0,
    workOrRest: 'start',
    setNumber: 1,
    totalSets: 3,
    duration: 1,
    exercise: groupedExercises[1].exercises[0],
  });

  const updateLiveGroup = (num) => {
    const updatedLiveGroup = executeTimerLogic(liveGroup, num, groupedExercises);
    setLiveGroup({
      ...updatedLiveGroup,
    });
  };

  const [key, setKey] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleKey = () => {
    setKey(key + 1);
  };

  // pause timer;
  const pause = () => {
    return setIsPlaying(!isPlaying);
  };

  const timerProps = {
    key,
    isPlaying,
    liveGroup,
    updateLiveGroup,
    handleKey,
  };

  return (
    <Layout user={user} trainingSession={trainingSession} loading={false}>
      {loading && <p>Loading login info...</p>}
      {!trainingSession && <p> no workout</p>}
      <h1>{trainingSession.trainingSessionName}</h1>
      <SoundButton />
      <Grid container alignItems="center" spacing={5}>
        <Grid item xs={4} align="center">
          <WorkoutTimer timerProps={timerProps} />
          <TimerControl pause={pause} isPlaying={isPlaying} updateLiveGroup={updateLiveGroup} />
        </Grid>
        <Grid item xs={4}>
          <ExerciseCard {...liveGroup} />
        </Grid>
      </Grid>
      <br />
      <SessionTableForm
        trainingSession={trainingSession}
        liveGroupNumber={liveGroup.groupNum}
        localUser={localUser}
      />
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  withPageAuthRequired();
  return serverSideHandler(req, res);
}

Train.propTypes = {
  user: PropTypes.shape({
    given_name: PropTypes.string,
    family_name: PropTypes.string,
    nickname: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
    locale: PropTypes.string,
    updated_at: PropTypes.string,
    email: PropTypes.string,
    email_verified: PropTypes.bool,
    sub: PropTypes.string,
  }),

  trainingSession: PropTypes.shape({
    trainingSessionName: PropTypes.string,
    exercises: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        exerciseName: PropTypes.string,
        exerciseNumber: PropTypes.number,
        totalSets: PropTypes.number,
        groupNumber: PropTypes.number,
        numReps: PropTypes.number,
        resistance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        resistanceType: PropTypes.string,
        setsCompleted: PropTypes.number,
        complete: PropTypes.bool,
        workTime: PropTypes.number,
        restTime: PropTypes.number,
        exerciseIntensity: PropTypes.string,
      }),
    ),
  }),
  localUser: PropTypes.shape({
    email: PropTypes.string,
    isAdmin: PropTypes.bool,
    given_name: PropTypes.string,
    family_name: PropTypes.string,
    nickname: PropTypes.string,
    trainingSessionOrder: PropTypes.array,
    nextSession: PropTypes.string,
    sub: PropTypes.string,
    updated_at: PropTypes.string,
  }),
};

Train.defaultProps = {
  user: null,
  trainingSession: null,
  localUser: null,
};

export default Train;

/* Create an exercise object where each key is the ID of the exercise and it's respective properties

  */
// const exercises = dbExcercises.reduce((accum, {
//   _id,
//   exerciseName,
//   resistanceType
// }) => {
//   return {
//     ...accum,
//     [_id]: {exerciseName, resistanceType}
//   }
// },
// {})

// const groupedBySetsAndSet = Object.entries(groupedBySets).map(([numSets, sets]) => {

// })
