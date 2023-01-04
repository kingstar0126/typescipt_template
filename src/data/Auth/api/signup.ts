import { Users } from '../..';
import { axiosWithoutAuth } from '../../axiosWithConfig';
import { IAuthResponse } from './types';

export type { AxiosError } from 'axios';

export const signup = async (
  credentials: Users.INewUser,
): Promise<IAuthResponse> => {
  if (credentials.tos) Reflect.deleteProperty(credentials, 'tos');
  const { data } = await axiosWithoutAuth().post(
    '/api/auth/register',
    credentials,
  );
  return data;
};
