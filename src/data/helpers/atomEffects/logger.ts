import { AtomEffect } from 'recoil';

export const logger: <DataType>() => AtomEffect<DataType> =
  () =>
  ({ onSet, node }) => {
    onSet((next, prev) => {
      console.group(`${node.key} updated`);
      console.log('prev', prev);
      console.log('next', next);
      console.groupEnd();
    });
  };
