import { DefaultValue, atom, selector } from 'recoil';

export const listState = atom<{
  [key: string]: string[];
}>({
  key: 'lists',
  default: {
    plan: ['1', '2', '3', '4', '5'],
    progress: [],
    done: [],
  },
});
