import { DefaultValue, atom, selector } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

export interface IListState {
  [key: string]: string[] | [];
}

export const listState = atom<IListState>({
  key: `lists/${uuidv4()}`,
  default: {
    plan: ['1', '2', '3', '4', '5'],
    progress: ['one', 'two', 'three'],
    done: ['done1', 'done2'],
  },
});

