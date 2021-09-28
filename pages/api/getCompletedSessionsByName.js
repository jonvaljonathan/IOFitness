import connectToDb from '../../server/middleware/database';

import TrainingSession from '../../server/models/TrainingSession';

const getCompletedSessionsByName = async (req, res) => {
  await connectToDb();
  const { uid, trainingSessionName } = req.body;
  try {
    const completedSessions = await TrainingSession.getCompletedSessionsByName(
      uid,
      trainingSessionName,
    );
    res.json({ completedSessions });
  } catch (e) {
    res.json(e);
  }
};

export default getCompletedSessionsByName;
