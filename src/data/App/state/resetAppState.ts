import { selector } from 'recoil';
import * as Auth from '../../Auth';

export const resetAppState = selector<void>({
  key: 'resetAppStateSelector',
  get: () => undefined,
  set: ({ set }) => {
    // Log out
    set(Auth.state.login, undefined);
  },
});
