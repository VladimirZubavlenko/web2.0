import { Link } from 'react-router-dom';
import * as React from 'react';
import Routes, { RoutesNames } from '../../pages/routes';
import Logo from '../../assets/img/logo.png';

import s from './NavBar.module.scss';

interface IProps {
  name: string;
}

const NavBar: React.FC<IProps> = (props: IProps) => {
  return (
    <div className={s.root}>
      <div className={s.grid}>
        <img className={s.logo} src={Logo} alt="website logo" />
        <nav className={s.appbar}>
          <Link className={s.appbarLink} to={Routes.ROOT}>
            {RoutesNames.ROOT}
          </Link>
          <Link className={s.appbarLink} to={Routes.USERS}>
            {RoutesNames.USERS}
          </Link>
          <Link className={s.appbarLink} to={Routes.NEWS}>
            {RoutesNames.NEWS}
          </Link>
          <Link className={s.appbarLink} to={Routes.COUNTER}>
            {RoutesNames.COUNTER}
          </Link>
          <Link className={s.appbarLink} to={Routes.CHALLENGES}>
            {RoutesNames.CHALLENGES}
          </Link>
        </nav>
        <nav className={s.appbar2}>
          <Link className={s.appbarLink2} to={Routes.LOGIN}>
            {RoutesNames.LOGIN}
          </Link>
          <Link className={s.appbarLink2} to={Routes.REGISTER}>
            {RoutesNames.REGISTER}
          </Link>
        </nav>
      </div>
      <h1 className={s.text}>{props.name}</h1>
    </div>
  );
};

export default NavBar;
