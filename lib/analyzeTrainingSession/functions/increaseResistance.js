/* eslint-disable no-nested-ternary */
import {
  lbsArray,
  kgsArray,
  loopBandAssistanceArray,
  loopBandResistanceArray,
  crossOverCordsArray,
  hipBandArray,
} from '../../../server/models/DBFiles/buildWorkoutDefaults';

export const increaseResistance = (resistanceType, currentResistance) => {
  const isLbs = resistanceType === 'lbs';
  const isKgs = resistanceType === 'kgs';
  const isLoopsBandAssistance = resistanceType === 'loopBandAssistance';
  const isLoopsBandResistance = resistanceType === 'loopBandResistance';
  const isCrossOverCords = resistanceType === 'crossoverCords';
  const isHipBands = resistanceType === 'hipBands';
  // based on type of resistance, find the resistance type array
  const resistanceTypeArray = isLbs
    ? lbsArray
    : isKgs
    ? kgsArray
    : isLoopsBandAssistance
    ? loopBandAssistanceArray
    : isLoopsBandResistance
    ? loopBandResistanceArray
    : isCrossOverCords
    ? crossOverCordsArray
    : isHipBands
    ? hipBandArray
    : null;

  if (currentResistance === null || (currentResistance === 'none' && currentResistance !== 0)) {
    return currentResistance;
  }
  const currentResistanceIndex = resistanceTypeArray.indexOf(currentResistance);
  const nextResistanceLevel = resistanceTypeArray[currentResistanceIndex + 1];
  if (!nextResistanceLevel) {
    return currentResistance;
  }
  return nextResistanceLevel;
};
