import { DefaultValue, atom, selector } from 'recoil';

export const minutesState = atom<number>({
  key: 'minutes',
  default: 0,
});

export const hourSelector = selector<number>({
  key: 'hours',
  get: ({ get }) => {
    const minutes = get(minutesState);
    return Math.round(minutes / 60);
  },
  set: ({ set }, newValue) => set(minutesState, newValue instanceof DefaultValue ? newValue : Math.ceil(+newValue * 60)),
});
