import { axiosWithoutAuth } from '../../axiosWithConfig';
import { IPassResetPostBody } from './types';

export interface ResetParams {
  email: string;
}

export const getPasswordReset = async ({
  email,
}: ResetParams): Promise<{ message: string }> => {
  const { data } = await axiosWithoutAuth().get(
    `/api/account/password?email=${email}&origin=Clash`,
  );
  return data;
};

export const updatePassword = async (
  body: IPassResetPostBody,
): Promise<void> => {
  await axiosWithoutAuth().post('/api/account/password', body);
};

export async function getCodenameReminder({
  email,
}: ResetParams): Promise<{ message: string; recipient?: string }> {
  const { data } = await axiosWithoutAuth().get(
    `/api/account/codename?email=${email}&origin=Clash`,
  );
  return data;
}
