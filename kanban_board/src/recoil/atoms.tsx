import { DefaultValue, atom, selector } from 'recoil';
import { RecoilEnv } from 'recoil';
import { v4 as uuidv4 } from 'uuid';


export const listState = atom<{
  [key: string]: string[] | [];
}>({
  key: `lists/${uuidv4()}`,
  default: {
    plan: ['1', '2', '3', '4', '5'],
    progress: [],
    done: [],
  },
});
