import connectToDb from '../../server/middleware/database';

import LocalUser from '../../server/models/LocalUser';

const deleteLocalUser = async (req, res) => {
  await connectToDb();
  const { email } = req.body;
  try {
    const usersDeleted = await LocalUser.deleteLocalUser({ email });
    if (usersDeleted) {
      res.json({ usersDeleted });
    }
  } catch (e) {
    res.json(e);
  }
};

export default deleteLocalUser;
