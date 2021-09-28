import connectToDb from '../../server/middleware/database';
import TrainingSession from '../../server/models/TrainingSession';

// gets a localUsers nextSession from the TrainingSession collection

const getTrainingSession = async (req, res) => {
  await connectToDb();
  const { localUser } = req.body;

  try {
    const trainingSession = await TrainingSession.getTrainingSession(
      localUser._id,
      localUser.nextSession,
    );

    res.json({ trainingSession });
  } catch (e) {
    res.json(e);
  }
};

export default getTrainingSession;
