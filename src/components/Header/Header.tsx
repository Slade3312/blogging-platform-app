import React from 'react';
import headerClass from './Header.module.scss';
import Button from '../Button/Button';

const Header: React.FC = () => {
  return (
    <div className={headerClass.wrapper}>
      <h2 className={headerClass.h2}>Realworld Blog</h2>
      <Button variant="sign">Sign-In</Button>
      <Button variant="sign">Sign-Up</Button>
    </div>
  );
};

export default Header;
