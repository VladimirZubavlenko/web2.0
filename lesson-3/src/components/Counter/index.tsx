import * as React from 'react';
import { Button} from '@blueprintjs/core';
import s from './Counter.module.scss'
import { increment } from './@slice'
import { useAppDispatch, useAppSelector } from '../../hooks';

const Counter: React.FC  = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className={s.root}>
      <Button icon="send-to" intent="success" text="Click" onClick={() => dispatch(increment())}/>
      <div>{count}</div>
    </div>
  )
}

export default Counter;
