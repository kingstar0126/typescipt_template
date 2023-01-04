import { axiosWithoutAuth } from '../../axiosWithConfig';
import { IAuthResponse } from './types';

export async function getMe(token: string): Promise<IAuthResponse> {
  const { data } = await axiosWithoutAuth({ timeoutInSeconds: 10 }).get(
    `/api/me?token=${token}`,
  );
  return { token, user: data };
}
