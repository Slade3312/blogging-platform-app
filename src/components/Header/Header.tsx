import React from 'react';
import headerClass from './Header.module.scss';
import Button from '../Button/Button';
import { getArticles, getArticle } from '../../services/serviceAPI';

const Header: React.FC = () => {
  const signInHandler = () => {
    getArticles().then((value) => {
      console.log(value);
    });
  };

  const signUpHandler = () => {
    getArticle().then((value) => {
      console.log(value);
    });
  };

  return (
    <div className={headerClass.wrapper}>
      <h2 className={headerClass.h2}>Realworld Blog</h2>
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
