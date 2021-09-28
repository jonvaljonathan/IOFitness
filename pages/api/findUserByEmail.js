import connectToDb from '../../server/middleware/database';

import LocalUser from '../../server/models/LocalUser';

const findUserByEmail = async (req, res) => {
  await connectToDb();
  const { email } = req.body;
  try {
    const localUser = await LocalUser.findUserByEmail({ email });
    res.json({ localUser });
  } catch (e) {
    res.json(e);
  }
};

export default findUserByEmail;
