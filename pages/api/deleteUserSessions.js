import connectToDb from '../../server/middleware/database';

import TrainingSession from '../../server/models/TrainingSession';

const deleteLocalUserSessions = async (req, res) => {
  await connectToDb();
  const { uid } = req.body;
  if (uid !== undefined) {
    try {
      const sessionsDeleted = await TrainingSession.deleteUserSessions({ uid });
      if (sessionsDeleted) {
        res.json({ sessionsDeleted });
      }
    } catch (e) {
      res.json(e);
    }
  } else {
    res.json({ message: 'No uid' });
  }
};

export default deleteLocalUserSessions;
