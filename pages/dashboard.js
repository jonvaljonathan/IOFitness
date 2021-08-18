import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Layout from '../components/layout';
import TotalWorkouts from '../components/home/TotalWorkouts';
import WorkoutCalendar from '../components/home/WorkoutCalendar';
import WeightLifted from '../components/home/WeightLifted';
import { serverSideHandler } from '../lib/serverSideHandler/serverSideHandler';

export default function Index() {
  const { user } = useUser();
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
  withPageAuthRequired();
  return serverSideHandler(req, res);
}
