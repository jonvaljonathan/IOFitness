export const completeAllExercises = (toComplete, dataType) => {
  const completeMe = toComplete;
  if (dataType === 'trainingSession') {
    const completedExerciseArray = completeMe.exercises.map((exercise) => ({
      ...exercise,
      complete: true,
    }));
    completeMe.exercises = completedExerciseArray;
    return completeMe;
  }
  if (dataType === 'exercises') {
    const completedExercises = completeMe.map((exercise) => ({
      ...exercise,
      complete: true,
    }));
    return completedExercises;
  }
  if (dataType === 'exercise') {
    completeMe.complete = true;
    return completeMe;
  }

  return Error(`${dataType}`);
};
