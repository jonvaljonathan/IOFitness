import connectToDb from '../../server/middleware/database';

import TrainingSession from '../../server/models/TrainingSession';

const getAllCompletedSessions = async (req, res) => {
  await connectToDb();
  const { uid } = req.body;
  try {
    const allCompletedSessions = await TrainingSession.getAllCompletedSessions(uid);
    res.json({ allCompletedSessions });
  } catch (e) {
    res.json(e);
  }
};

export default getAllCompletedSessions;
