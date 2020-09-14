import React from 'react';

import inputFormClass from './InputForm.module.scss';
import { InputProps } from '../../types';

const InputForm = React.forwardRef<HTMLInputElement, InputProps>(({ label, type, errors, errorMassage }, ref) => {
  const htmlFor = `${label}-${Math.random}`;
  return (
    <div className={inputFormClass.wrapper}>
      <label className={inputFormClass.label} htmlFor={htmlFor}>
        {label}
      </label>
      <input name={label} className={inputFormClass.input} id={htmlFor} placeholder={label} type={type} ref={ref} />
      {errors?.[label] && <span className={inputFormClass.span}>{errorMassage}</span>}
    </div>
  );
});

export default InputForm;
