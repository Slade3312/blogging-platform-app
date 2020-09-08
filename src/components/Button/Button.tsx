/* eslint-disable react/button-has-type */

import React from 'react';
import { ButtonProps } from '../../types';
import buttonClass from './Button.module.scss';

const Button: React.FC<ButtonProps> = (props) => {
  console.log(buttonClass);
  const { variant, children } = props;

  switch (variant) {
    case 'sign':
      return (
        <button aria-label="link-sign" type="button" className={buttonClass.sing}>
          {children}
        </button>
      );
    default:
      return <button aria-label="button" type="button" />;
  }
};

export default Button;
