import { axiosWithAuth } from '../../axiosWithConfig';
import { IUser } from '../types/userTypes';

/** Use this to update user data, make sure to pass in ID */
export const update = async ({
  id,
  ...changes
}: Partial<IUser>): Promise<IUser> => {
  if (!id) {
    console.error(
      new Error(
        "You did NOT pass in the ID to the user update function it won't work!",
      ),
    );
  }
  const { data } = await axiosWithAuth().put(`/api/users/${id}`, changes);
  return data;
};
