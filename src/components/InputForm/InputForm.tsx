import React from 'react';

import inputFormClass from './InputForm.module.scss';
import { InputProps } from '../../types';

const InputForm = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, errors, errorMassage, responseError = null, name }, ref) => {
    const htmlFor = `${name}-${Math.random}`;
    return (
      <div className={inputFormClass.wrapper}>
        <label className={inputFormClass.label} htmlFor={htmlFor}>
          {name}
        </label>
        <input name={label} className={inputFormClass.input} id={htmlFor} placeholder={name} type={type} ref={ref} />
        {errors?.[label] && <span className={inputFormClass.span}>{errorMassage}</span>}
        <span className={inputFormClass.span}>{responseError}</span>
      </div>
    );
  }
);

export default InputForm;
