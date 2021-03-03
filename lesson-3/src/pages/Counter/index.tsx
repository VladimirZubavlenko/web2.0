import * as React from 'react';
import NavBar from "../../components/NavBar";
import Counter from '../../components/Counter';

export const CounterPage: React.FC = () => {
  return (
    <div>
      <NavBar name={'Тест кликер'}/>
      <Counter/>
    </div>
  );
}
