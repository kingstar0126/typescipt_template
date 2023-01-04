import { AtomEffect } from 'recoil';

export const recalculate: <DataType>(
  getter: () => DataType,
  seconds?: number,
) => AtomEffect<DataType> = (getter, secondsToCheck = 1) => {
  return function recalculateAtomEffect({ setSelf }) {
    const interval = setInterval(
      () => setSelf(getter()),
      1000 * secondsToCheck,
    );
    return () => clearInterval(interval);
  };
};
