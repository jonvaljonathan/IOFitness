/*
createNextTrainingSession function
  - takes the progressed exercises array and the lastCompletedExercises array
  - returns the nextExercises array
  - add all progressed exercises to nextExercises array
  - if an exercise is in lastCompletedExercises array but not in the progressedExercises array
  --  add the exercise - in order, toe the nextExercises array
  - add nextExercises array to the trainingSession object 
  - return the trainingSession object 
*/

export const createNextSession = (nextSession, nextSessionExercises) => {
  const session = nextSession;
  session.complete = false;
  delete session._id;
  session.exercises = nextSessionExercises;
  return session;
};
