import connectToDb from '../../server/middleware/database';

const Progression = require('../../server/models/Progression');

export default async (req, res) => {
  await connectToDb();
  try {
    const progressions = await Progression.getAll();
    res.json({
      progressions,
    });
  } catch (err) {
    res.json(err);
  }
};
