import React from 'react';

import inputFormClass from './InputForm.module.scss';
import { InputProps } from '../../types';

const InputForm = React.forwardRef<HTMLInputElement & HTMLTextAreaElement, InputProps>((props, ref) => {
  const { label, textarea, errorMassage, errors, responseError = null, id, name, ...inputProps } = props;

  const contentInput = textarea ? (
    <textarea {...inputProps} id={id} name={name} ref={ref} className={inputFormClass.input} />
  ) : (
    <input {...inputProps} id={id} name={name} ref={ref} className={inputFormClass.input} />
  );

  return (
    <div className={inputFormClass.wrapper}>
      {label && (
        <label className={inputFormClass.label} htmlFor={id}>
          {label}
        </label>
      )}

      {contentInput}
      {errors?.[name] && <span className={inputFormClass.span}>{errorMassage}</span>}
      <span className={inputFormClass.span}>{responseError}</span>
    </div>
  );
});

export default InputForm;
