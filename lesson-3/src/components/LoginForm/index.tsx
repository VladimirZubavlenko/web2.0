import * as React from 'react';
import { Button, InputGroup } from '@blueprintjs/core';
import s from './LoginForm.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeLogin, changePassword } from './@slice'

const LoginForm: React.FC  = () => {
  const login = useAppSelector(state => state.loginForm.login);
  const password = useAppSelector(state => state.loginForm.password);

  const dispatch = useAppDispatch();

  return (
    <div className={s.root}>
      <InputGroup id="username" placeholder="username"
                  value={login}
                  onChange={(event) => dispatch(changeLogin(event.target.value))}/>
      <InputGroup id="password" placeholder="password"
                  value={password}
                  onChange={(event) => dispatch(changePassword(event.target.value))}/>
      <Button icon="send-to" intent="success" text="Войти"/>
    </div>
  )
}

export default LoginForm;
