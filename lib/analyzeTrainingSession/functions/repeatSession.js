/* 
    trims the _id off lastcompletedSession and returns that session 
    need to add another part of this.
*/

export const repeatSession = (nextSession) => {
  // if it's the first completedTraining session, do it again!
  const session = nextSession;
  delete session._id;
  session.exercises = nextSession.exercises.map((e) => ({ ...e, complete: false }));
  return session;
};
