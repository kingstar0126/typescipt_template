/**
 * If a key is set in the ENV, it will use that as the localStorage
 * key for the token, otherwise it will be stored as `token: ''`
 */
export const STORAGE_KEY: string = process.env.REACT_APP_TOKEN_KEY || 'token';

/**
 * Decodes the token and checks if you're still logged in before continuing.
 * If the token has expired or there is no token, the token is cleared and
 * you're sent back to the landing page.
 */
export const get = (): string | null => localStorage.getItem(STORAGE_KEY);

/**
 * This function stores a token in localStorage
 * @param token taks a token as the argument and stores it in localStorage
 */
export const set = (token: string): void =>
  localStorage.setItem(STORAGE_KEY, token);

/**
 * Clears the current token stored in localStorage
 */
export const clear = (): void => localStorage.removeItem(STORAGE_KEY);

/**
 * An interface defining what the DecodedToken looks like
 */
export interface DecodedToken {
  exp: number;
  iat: number;
  id: number;
  codename: string;
  email: string;
}
