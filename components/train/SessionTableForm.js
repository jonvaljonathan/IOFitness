/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import { useForm, Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useRouter } from 'next/router';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Checkbox from '@material-ui/core/Checkbox';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import InputBase from '@material-ui/core/InputBase';
import { serverSideHandler } from '../../lib/serverSideHandler/serverSideHandler';
import SelectField from '../SelectField';
import { styleForm, styleSubmitButton } from '../SharedStyles';

import { arraySelect } from '../../server/models/DBFiles/buildWorkoutDefaults';
import { completeTrainingSession } from '../../lib/api/customer';

const BootstrapInput = withStyles(() => ({
  input: {
    color: 'white',
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
  },
}))(InputBase);

const useStyles = makeStyles(() => ({
  1: {
    backgroundColor: '#011f4b',
    color: 'white',
  },
  2: {
    backgroundColor: '#03396c',
    color: 'white',
  },
  3: {
    backgroundColor: '#005b96',
    color: 'white',
  },
  4: {
    backgroundColor: '#6497b1',
    color: 'white',
  },
  5: {
    backgroundColor: '#011f4b',
    color: 'white',
  },
  6: {
    backgroundColor: '#03396c',
    color: 'white',
  },
  7: {
    backgroundColor: '#005b96',
    color: 'white',
  },
  8: {
    backgroundColor: '#6497b1',
    color: 'white',
  },
  9: {
    backgroundColor: '#011f4b',
    color: 'white',
  },
  10: {
    backgroundColor: '#03396c',
    color: 'white',
  },
  11: {
    backgroundColor: '#005b96',
    color: 'white',
  },
  12: {
    backgroundColor: '#6497b1',
    color: 'white',
  },
  liveGroupStyle: {
    backgroundColor: '#02C769',
  },
  tCell: {
    color: 'white',
  },
  TableRow: {
    height: '20px',
  },
  Checkbox: {
    color: 'white',
  },
  SelectField: {
    color: 'white',
    width: '100%',
  },
}));

export default function SessionTableForm(props) {
  const classes = useStyles();
  const { trainingSession } = props;
  const { liveGroupNumber } = props;
  const { localUser } = props;

  const handleLiveGroupStyle = (realGroupNumber) => {
    if (realGroupNumber === liveGroupNumber) {
      return classes.liveGroupStyle;
    }
    return classes[realGroupNumber];
  };

  // handle change... add to completedExerciseArray if changed to true
  // remove from completedExerciseArray if false
  // check all option

  const { handleSubmit, setValue, errors, control, getValues } = useForm({
    defaultValues: {
      uid: localUser ? localUser.id : '',
      liveTrainingSession: trainingSession,
    },
  });

  const router = useRouter();

  const onSubmit = async (data) => {
    const { liveTrainingSession } = data;
    try {
      const isComplete = await completeTrainingSession({
        localUser,
        liveTrainingSession,
      });
      if (isComplete) {
        router.reload();
      }
    } catch (e) {
      Error(e);
    }
  };

  const completeAll = () => {
    const liveTrainingSession = getValues('liveTrainingSession');
    const toggleComplete = !liveTrainingSession.complete;
    setValue('liveTrainingSession.complete', toggleComplete);
    trainingSession.exercises.forEach((exercise, exerciseIndex) => {
      setValue(`liveTrainingSession.exercises[${exerciseIndex}].complete`, toggleComplete);
    });
  };

  return (
    <div>
      <form style={styleForm} onSubmit={handleSubmit(onSubmit)}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Controller
                    name="liveTrainingSession.complete"
                    defaultValue={trainingSession.complete}
                    control={control}
                    render={(props) => (
                      <Checkbox
                        onChange={(e) => completeAll(e.target.checked)}
                        checked={props.value}
                      />
                    )}
                  />
                  Complete
                </TableCell>
                <TableCell>Group Number</TableCell>
                <TableCell>Exercise Name</TableCell>
                <TableCell align="center">Total Sets</TableCell>
                <TableCell align="center">Reps</TableCell>
                <TableCell align="center">Resistance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trainingSession.exercises.map((exercise, exerciseIndex) => (
                <TableRow
                  key={exercise.exerciseName}
                  className={handleLiveGroupStyle(exercise.groupNumber)}
                >
                  <TableCell align="center" className={classes.tCell}>
                    <input
                      type="hidden"
                      name={`liveTrainingSession.exercises[${exerciseIndex}].exerciseName`}
                    />
                    <input
                      type="hidden"
                      name={`liveTrainingSession.exercises[${exerciseIndex}].exerciseNumber`}
                    />
                    <input
                      type="hidden"
                      name={`liveTrainingSession.exercises[${exerciseIndex}].totalSets`}
                    />
                    <input
                      type="hidden"
                      name={`liveTrainingSession.exercises[${exerciseIndex}].groupNumber`}
                    />
                    <input
                      type="hidden"
                      name={`liveTrainingSession.exercises[${exerciseIndex}].resistanceType`}
                    />
                    <input
                      type="hidden"
                      name={`liveTrainingSession.exercises[${exerciseIndex}].workTime`}
                    />
                    <input
                      type="hidden"
                      name={`liveTrainingSession.exercises[${exerciseIndex}].restTime`}
                    />
                    <input
                      type="hidden"
                      name={`liveTrainingSession.exercises[${exerciseIndex}].exerciseIntensity`}
                    />
                    <Controller
                      name={`liveTrainingSession.exercises[${exerciseIndex}].complete`}
                      defaultValue={exercise.complete}
                      control={control}
                      render={({ field: { onChange, value, ref } }) => (
                        <Checkbox
                          onChange={onChange}
                          checked={value}
                          inputRef={ref}
                          className={classes.Checkbox}
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row" align="center" className={classes.tCell}>
                    {exercise.groupNumber}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center" className={classes.tCell}>
                    {exercise.exerciseName}
                  </TableCell>
                  <TableCell align="center" className={classes.tCell}>
                    {exercise.totalSets}
                  </TableCell>
                  <TableCell align="center">
                    <SelectField
                      defaultValue={exercise.numReps}
                      objectKey={exercise.exerciseIntensity}
                      name={`liveTrainingSession.exercises[${exerciseIndex}].numReps`}
                      array={arraySelect[`${exercise.exerciseIntensity}`]}
                      control={control}
                      errors={errors}
                      className={classes.SelectField}
                      input={<BootstrapInput />}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <SelectField
                      defaultValue={exercise.resistance}
                      objectKey={exercise.resistanceType}
                      name={`liveTrainingSession.exercises[${exerciseIndex}].resistance`}
                      array={arraySelect[`${exercise.resistanceType}`]}
                      control={control}
                      errors={errors}
                      className={classes.SelectField}
                      input={<BootstrapInput />}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <input type="hidden" name="liveTrainingSession._id" />
        <input type="hidden" name="liveTrainingSession.date" />
        <input type="hidden" name="liveTrainingSession.uid" />
        <input type="hidden" name="liveTrainingSession.trainingSessionName" />
        <Button type="submit" style={styleSubmitButton} fullWidth>
          Save Workout
        </Button>
      </form>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  withPageAuthRequired();
  return serverSideHandler(req, res);
}

SessionTableForm.propTypes = {
  localUser: PropTypes.shape({
    email: PropTypes.string,
    isAdmin: PropTypes.bool,
    given_name: PropTypes.string,
    family_name: PropTypes.string,
    nickname: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    trainingSessionOrder: PropTypes.array,
    nextSession: PropTypes.string,
    sub: PropTypes.string,
    updated_at: PropTypes.string,
  }),
  liveGroupNumber: PropTypes.number,
  trainingSession: PropTypes.shape({
    exercises: PropTypes.arrayOf(
      PropTypes.shape({
        exerciseNumber: PropTypes.number,
        exerciseName: PropTypes.string,
        totalSets: PropTypes.number,
        groupNumber: PropTypes.number,
        numReps: PropTypes.number,
        resistance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        resistanceType: PropTypes.string,
        setsCompleted: PropTypes.number,
        complete: PropTypes.bool,
        workTime: PropTypes.number,
        restTime: PropTypes.number,
      }),
    ),
  }),
};

SessionTableForm.defaultProps = {
  localUser: null,
  liveGroupNumber: 1,
  trainingSession: null,
  // progressions: null,
};
