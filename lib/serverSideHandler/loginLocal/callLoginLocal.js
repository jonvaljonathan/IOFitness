import { loginLocal } from '../../api/customer';

export const callLoginLocal = async (user) => {
  if (user) {
    try {
      const { localUser } = await loginLocal({ user });

      if (!localUser) {
        return null;
      }
      return localUser;
    } catch (e) {
      return e;
    }
  }
  return Error;
};
