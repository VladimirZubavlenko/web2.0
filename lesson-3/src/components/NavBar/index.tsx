import { Link } from 'react-router-dom';
import * as React from 'react';

interface IProps {
  name?: string;
}

const NavBar: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      <div>
        <img alt="website logo" />
        <nav>
          <Link to={'/'}/>
        </nav>
      </div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default NavBar;
