import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

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
    color: '#000000',
    opacity: '50',
  },
  rest: {
    backgroundColor: 'red',
  }
}));
export default function SessionTable(props) {
  const classes = useStyles();
  // liveGroup props
  const { groupedExercises } = props;
  const { liveGroup } = props;
  console.log({ liveGroup });

  const liveGroupNumber = liveGroup.groupNum;
  // timer settings
  // conditionally renders set rows by returning classes.set
  const handleLiveExerciseStyle = (exerciseName) => {
    console.log({ exerciseName });
    if (exerciseName === liveGroup.exercise.exerciseName) {
      return classes.liveGroupStyle;
    }
    return classes[2];
  };

  const handleWorkOrRestStyle = (workOrRest) => {
    if (workOrRest === 'work' || workOrRest === 'start') {
      return classes.liveGroupStyle;
    }
    return classes.rest;
  };

  return (
    <TableContainer component={Paper} style={{ height: '100%' }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Exercise Name</TableCell>
            <TableCell align="right">Total Sets</TableCell>
            <TableCell align="right">Reps</TableCell>
            <TableCell align="right">Resistance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ height: '100%' }}>
          {groupedExercises[liveGroupNumber].exercises.map((exercise) => (
            <TableRow
              key={exercise.exerciseName}
              className={handleLiveExerciseStyle(exercise.exerciseName)}
            >
              <TableCell component="th" scope="row" className={classes.tCell}>
                <Typography variant="h6"> {exercise.exerciseName}</Typography>
              </TableCell>
              <TableCell align="right" className={classes.tCell}>
                <Typography variant="h6"> {exercise.totalSets}</Typography>
              </TableCell>
              <TableCell align="right" className={classes.tCell}>
                <Typography variant="h6"> {exercise.numReps}</Typography>
              </TableCell>
              <TableCell align="right" className={classes.tCell}>
                <Typography variant="h6"> {exercise.resistance}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table>
        <TableBody>
          <TableRow key={liveGroup.exercise.exerciseName}>
            <TableCell align="center" className={classes.tCell} style={{ width: '50%' }}>
              <Typography variant="h5">Set Number</Typography>
              <Typography variant="h5">{liveGroup.setNumber}</Typography>
            </TableCell>
            <TableCell
              align="center"
              className={handleWorkOrRestStyle(liveGroup.workOrRest)}
              style={{ width: '50%' }}
            >
              <Typography variant="h5" style={{ textTransform: 'uppercase' }}>
                {liveGroup.workOrRest}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
SessionTable.propTypes = {
  liveGroup: PropTypes.shape({
    groupNum: PropTypes.number,
    exerciseIndex: PropTypes.number,
    workOrRest: PropTypes.string,
    setNumber: PropTypes.number,
    totalSets: PropTypes.number,
    duration: PropTypes.number,
    exercise: PropTypes.object,
  }),
  trainingSession: PropTypes.shape({
    exercises: PropTypes.arrayOf(
      PropTypes.shape({
        exerciseNumber: PropTypes.number,
        exerciseName: PropTypes.string,
        totalSets: PropTypes.number,
        groupNumber: PropTypes.number,
        numReps: PropTypes.array,
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

SessionTable.defaultProps = {
  liveGroup: null,
  trainingSession: null,
};
