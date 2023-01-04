import axios, { AxiosInstance } from 'axios';
import { token } from '../utils';

// Attempts to read the API URL from your ENV, falls back to localhost
const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

interface AxiosGeneratorProps {
  timeoutInSeconds?: number;
}

export const axiosWithAuth = ({
  timeoutInSeconds = 0,
}: AxiosGeneratorProps = {}): AxiosInstance => {
  const Authorization = token.get();
  return axios.create({
    baseURL,
    headers: { Authorization },
    timeout: timeoutInSeconds * 1000,
  });
};

export const axiosWithoutAuth = ({
  timeoutInSeconds = 0,
}: AxiosGeneratorProps = {}): AxiosInstance =>
  axios.create({
    baseURL,
    timeout: timeoutInSeconds * 1000,
  });
