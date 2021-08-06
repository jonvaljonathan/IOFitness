import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';

import { Button } from '@material-ui/core';
import Layout from '../components/layout';

export default function Index() {
  const { user, error, isLoading } = useUser();

  return (
    <Layout user={user}>
      <h1>IO Fitness</h1>

      {isLoading && <p>Loading login info...</p>}

      {error && (
        <>
          <h4>Error</h4>
          <pre>{error.message}</pre>
        </>
      )}

      {user && (
        <>
          <Button href="/train">Train</Button>
          <Button href="/build-program">Build Program</Button>
        </>
      )}

      {!isLoading && !error && !user && (
        <>
          <h2>Workout programs that work for you!</h2>
          <Button href="/api/auth/login">Log in</Button>
        </>
      )}
    </Layout>
  );
}
