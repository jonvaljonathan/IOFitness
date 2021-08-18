import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useUser } from '@auth0/nextjs-auth0';
import Layout from '../components/layout';
import TotalWorkouts from '../components/home/TotalWorkouts';
import WorkoutCalendar from '../components/home/WorkoutCalendar';
import WeightLifted from '../components/home/WeightLifted';
import { serverSideHandler } from '../lib/serverSideHandler/serverSideHandler';

export default function Dashboard(props) {
  const { user } = useUser();
  const { localUser } = props;

  return (
    <Layout user={user} hideHeader={false}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TotalWorkouts />
        </Grid>
        <Grid item xs={4}>
          <WorkoutCalendar />
        </Grid>
        <Grid item xs={4}>
          <WeightLifted />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">localUser</Typography>
          <Typography variant="h4">{localUser._id}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Button href="/train" variant="contained" color="primary" style={{ width: '100%' }}>
            Train
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            href="/build-program"
            variant="contained"
            color="primary"
            style={{ width: '100%' }}
          >
            Build Program
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  const data = await serverSideHandler(req, res);
  console.log({ data });
  return data;
}

Dashboard.propTypes = {
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

Dashboard.defaultProps = {
  user: null,
  trainingSession: null,
  localUser: null,
};
