import { getSession } from '@auth0/nextjs-auth0';
import { callLoginLocal } from './loginLocal/callLoginLocal';
import { returnProps } from './loginLocal/returnProps';
import { callGetTrainingSession } from './loginLocal/callGetTrainingSession';

export const serverSideHandler = async (req, res) => {
  console.log('serverSideHandler');
  const session = await getSession(req, res);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: { localUser: null },
    };
  }

  const auth0User = session.user;
  console.log('serverSideHandler');
  const localUser = await callLoginLocal(auth0User);
  if (req.url === '/build-program' || req.url === '/_next/data/development/build-program.json') {
    return { props: { localUser } };
  }
  const trainingSession = await callGetTrainingSession(localUser);
  return returnProps(localUser, trainingSession);
};
