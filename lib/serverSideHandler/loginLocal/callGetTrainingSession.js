import { getTrainingSession } from '../../api/customer';

export const callGetTrainingSession = async (localUser) => {
  try {
    const { trainingSession } = await getTrainingSession({ localUser });

    if (!trainingSession) {
      return null;
    }
    return trainingSession;
  } catch (e) {
    return e;
  }
};
