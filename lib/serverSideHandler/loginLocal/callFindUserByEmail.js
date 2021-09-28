import { findUserByEmail } from '../../api/customer';

export const callFindUserByEmail = async (email) => {
  try {
    const { localUser } = await findUserByEmail({ email });
    return localUser;
  } catch (e) {
    return e;
  }
};
