import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';

import { Button } from '@material-ui/core';
import Layout from '../components/layout';
import HomeHero from '../components/home/HomeHero';

export default function Index() {
  const { user, error, isLoading } = useUser();
  if (user) {
    return (
      <Layout user={user} hideHeader={false}>
        <>
          <Button href="/train">Train</Button>
          <Button href="/build-program">Build Program</Button>
        </>
      </Layout>
    );
  }
  return (
    <Layout user={user} hideHeader>
      <HomeHero />
    </Layout>
  );
}
