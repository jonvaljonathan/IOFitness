import sendRequest from './sendRequest';

const BASE_PATH = '/api';

export const loginLocal = ({ user }) =>
  sendRequest(`${BASE_PATH}/loginLocal`, {
    body: JSON.stringify({ user }),
  });

export const createMultipleTrainingSessions = ({ localUser, newTrainingSessions }) =>
  sendRequest(`${BASE_PATH}/createMultipleTrainingSessions`, {
    body: JSON.stringify({ localUser, newTrainingSessions }),
  });

export const getTrainingSession = ({ localUser }) =>
  sendRequest(`${BASE_PATH}/getTrainingSession`, {
    body: JSON.stringify({ localUser }),
  });

export const completeTrainingSession = ({ localUser, liveTrainingSession }) =>
  sendRequest(`${BASE_PATH}/completeTrainingSession`, {
    body: JSON.stringify({ localUser, liveTrainingSession }),
  });

export const getCompletedSessionsByName = ({ uid, trainingSessionName }) =>
  sendRequest(`${BASE_PATH}/getCompletedSessionsByName`, {
    body: JSON.stringify({ uid, trainingSessionName }),
  });

export const getAllCompletedSessions = ({ uid }) =>
  sendRequest(`${BASE_PATH}/getAllCompletedSessions`, {
    body: JSON.stringify({ uid }),
  });

export const getAllProgressions = () =>
  sendRequest(`${BASE_PATH}/getAllProgressions`, {
    body: JSON.stringify(),
  });

export const deleteLocalUser = ({ email }) =>
  sendRequest(`${BASE_PATH}/deleteLocalUser`, {
    body: JSON.stringify({ email }),
  });

export const findUserByEmail = ({ email }) =>
  sendRequest(`${BASE_PATH}/findUserByEmail`, {
    body: JSON.stringify({ email }),
  });

export const deleteUserSessions = ({ uid }) =>
  sendRequest(`${BASE_PATH}/deleteUserSessions`, {
    body: JSON.stringify({ uid }),
  });
