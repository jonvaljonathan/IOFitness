import { deleteLocalUser } from '../../api/customer';

export const callDeleteLocalUser = async (email) => {
  if (email) {
    try {
      const { usersDeleted } = await deleteLocalUser({ email });

      return usersDeleted;
    } catch (e) {
      return e;
    }
  }
  return Error;
};
