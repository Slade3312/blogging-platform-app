import React from 'react';
import { Link } from 'react-router-dom';
import headerClass from './Header.module.scss';
import Button from '../Button/Button';

const Header: React.FC = () => {
  const signInHandler = () => {
    console.log('in');
  };

  const signUpHandler = () => {
    console.log('up');
  };

  return (
    <div className={headerClass.wrapper}>
      <h2 className={headerClass.h2}>
        <Link to="/">Realworld Blog</Link>
      </h2>
      <Button className="sign" onClick={signInHandler}>
        Sign-In
      </Button>
      <Button className="sign" onClick={signUpHandler}>
        Sign-Up
      </Button>
    </div>
  );
};

export default Header;
