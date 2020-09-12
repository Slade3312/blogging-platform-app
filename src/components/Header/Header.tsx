import React from 'react';
import { Link } from 'react-router-dom';
import headerClass from './Header.module.scss';
import Button from '../Button/Button';

const Header: React.FC = () => {
  // const signInHandler = () => {
  //   console.log('in');
  // };

  // const signUpHandler = () => {
  //   console.log('up');
  // };

  return (
    <div className={headerClass.wrapper}>
      <h2 className={headerClass.h2}>
        <Link to="/">Realworld Blog</Link>
      </h2>
      <Link to="/sign-in">
        <Button className="sign">Sign-In</Button>
      </Link>
      <Link to="/sign-up">
        <Button className="sign">Sign-Up</Button>
      </Link>
    </div>
  );
};

export default Header;
