import { AtomEffect, DefaultValue } from 'recoil';

export const persist: <DataType>(
  key: string,
  config?: {
    asString?: boolean;
  },
) => AtomEffect<DataType> =
  (key, config) =>
  ({ onSet, setSelf }) => {
    const asString = config?.asString ?? false;

    // Initialize on app load
    const initVal = localStorage.getItem(key);
    if (initVal !== null) {
      if (asString) {
        // HACK - added type interface hack here so that we can store this as JUST a string and keep linter happy :)
        setSelf(initVal as unknown as DefaultValue);
      } else {
        const parsedInitVal = JSON.parse(initVal);
        setSelf(parsedInitVal);
      }
    }

    // And add the onSet atom event handler
    onSet((newVal) => {
      if (newVal instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        if (asString) {
          // HACK - added type interface hack here so that we can store this as JUST a string and keep linter happy :)
          localStorage.setItem(key, newVal as unknown as string);
        } else {
          localStorage.setItem(key, JSON.stringify(newVal));
        }
      }
    });
  };
