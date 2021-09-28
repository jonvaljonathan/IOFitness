import { deleteUserSessions } from '../api/customer';

export const callDeleteUserSessions = async (uid) => {
  if (uid) {
    try {
      const { sessionsDeleted } = await deleteUserSessions({ uid });

      return sessionsDeleted;
    } catch (e) {
      return e;
    }
  }
  return Error;
};
