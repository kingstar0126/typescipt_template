import { axiosWithoutAuth } from '../../axiosWithConfig';
import { IAuthResponse, ILoginBody } from './types';

export const login = async (
  credentials: ILoginBody,
): Promise<IAuthResponse> => {
  const { data } = await axiosWithoutAuth().post(
    '/api/auth/login',
    credentials,
  );
  return data;
};
