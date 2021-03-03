import * as React from 'react';
import NavBar from "../../components/NavBar";
import LoginForm from '../../components/LoginForm';

export const Login: React.FC = () => {

  return (
    <div>
      <NavBar name={'Регистрация'}/>
      <LoginForm/>
    </div>
  );

}
