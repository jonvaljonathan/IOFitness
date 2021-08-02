export const returnProps = (localUser, trainingSession) => {
  if (!localUser) {
    return { props: { localUser: null } };
  }
  if (!trainingSession) {
    return {
      redirect: {
        permanent: false,
        destination: '/build-program',
      },
    };
  }
  return {
    props: {
      trainingSession,
      localUser,
    },
  };
};
