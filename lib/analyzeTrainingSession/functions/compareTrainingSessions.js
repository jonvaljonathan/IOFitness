/*
compareTrainingSessions function
  -compares the training session exercise array with eachother
  - if a user has completed an individual exercise at the same reps and resistance twice
  - add the exercise to the exercisesToProgress array
  - the progressExercises array is added to the exercises to progress array   
*/

const isEqual = require('lodash.isequal');
const { removeNonCompletedExercises } = require('./removeNonCompletedExercises');

export const compareTrainingSessions = (lastCompletedSession, completedSession) => {
  const completedExercises = removeNonCompletedExercises(completedSession.exercises);
  const lastCompletedExercises = lastCompletedSession.exercises;

  const exercisesToProgress = completedExercises.filter((exercise) =>
    lastCompletedExercises.some((exercise2) => {
      return isEqual(exercise, exercise2);
    }),
  );

  return exercisesToProgress;
};
