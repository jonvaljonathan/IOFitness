/* eslint-disable no-nested-ternary */
import { increaseResistance } from './increaseResistance';
import { increaseReps } from './increaseReps';
import { setToBottomReps } from './setToBottomReps';

/*
progressExercises function
- increase the reps or resistance of the exercisesToProgress array
-if the reps are less than the highest rep of the repScheme
-- increase the reps by 1
-else
-- increase the resistance by 1 level
-- decrease the reps to the lowest in the repScheme
repScheme
strengthReps - 5-7
hyperTrophyReps 8-12
enduranceReps 14-18
- returns the progressed exercises array
*/

export const increaseRepsOrResistance = (exercise) => {
  const { numReps, exerciseIntensity, resistanceType, resistance } = exercise;
  const newExercise = exercise;
  let newNumReps;
  let newResistance;
  const lastSetReps = numReps;
  const lastSetRepsArray = [7, 10, 14];
  const isWarmup = exerciseIntensity === 'warmup';
  const isTopReps = lastSetRepsArray.includes(lastSetReps);
  if (isWarmup) {
    return newExercise;
  }
  if (isTopReps) {
    newResistance = increaseResistance(resistanceType, resistance);
    newNumReps = setToBottomReps(exerciseIntensity, numReps);
    newExercise.numReps = newNumReps;
    newExercise.resistance = newResistance;
    return newExercise;
  }
  newNumReps = increaseReps(numReps);
  newExercise.numReps = newNumReps;
  return newExercise;
};
