import { axiosWithoutAuth } from '../../axiosWithConfig';

export async function isCodenameAvailable(codename: string): Promise<boolean> {
  console.log('RUNNING CODENAME CHECKER');
  const { data } = await axiosWithoutAuth().get(
    `/api/users/availability?codename=${codename}`,
  );
  return data.available;
}

export async function isEmailAvailable(email: string): Promise<boolean> {
  const { data } = await axiosWithoutAuth().get(
    `/api/users/availability?email=${email}`,
  );
  return data.available;
}
