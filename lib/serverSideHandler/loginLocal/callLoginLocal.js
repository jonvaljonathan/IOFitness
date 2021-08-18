import { loginLocal } from '../../api/customer';

export const callLoginLocal = async (user) => {
  console.log('callLoginLocal');
  console.log(user);
  if (user) {
    try {
      const { localUser } = await loginLocal({ user });

      if (!localUser) {
        console.log('NO LOCAL USER callLoginLocal');
        return null;
      }
      return localUser;
    } catch (e) {
      return e;
    }
  }
  return Error;
};
