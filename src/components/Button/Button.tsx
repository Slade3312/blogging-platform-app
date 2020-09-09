/* eslint-disable react/button-has-type */
import React from 'react';
import { ButtonProps } from '../../types';
import buttonClass from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  switch (className) {
    case 'sign':
      return (
        <button aria-label="link-sign" onClick={onClick} type="button" className={buttonClass[className]}>
          {children}
        </button>
      );
    case 'tag':
      return (
        <button aria-label="tag" onClick={onClick} type="button" className={buttonClass[className]}>
          {children}
        </button>
      );

    default:
      return (
        <button aria-label="button" type="button">
          {children}
        </button>
      );
  }
};

export default Button;
