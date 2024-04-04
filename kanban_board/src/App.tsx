import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { hourSelector, minutesState } from './recoil/atoms';

function App() {
  const [minutes, setMinutes] = useRecoilState(minutesState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMinutes(+e.currentTarget.value);
  };
  const onHoursChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {
      currentTarget: { value },
    } = e;
    setHours(+value);
  };
  return (
    <div>
      <label htmlFor='minutes'>분(minutes)</label>
      <input
        className='inline-block my-2 border border-slate-300 p-1 rounded-sm'
        type='number'
        name='minutes'
        id='minutes'
        placeholder='Minutes'
        value={minutes}
        onChange={onMinutesChange}
      />
      <br />
      <label htmlFor='hours'>시(hours)</label>
      <input
        className='inline-block my-2 border border-slate-300 p-1 rounded-sm'
        type='number'
        name='hours'
        id='hours'
        placeholder='Hours'
        value={hours}
        onChange={onHoursChange}
      />
    </div>
  );
}

export default App;
