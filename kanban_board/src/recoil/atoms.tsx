import { DefaultValue, atom, selector } from 'recoil';

export const listState = atom({
  key: 'lists',
  default: ['1', '2', '3', '4','5'],
});
