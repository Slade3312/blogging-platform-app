import React from 'react';
import inputFormClass from './InputForm.module.scss';
import { InputFormType } from '../../types';

const InputForm: React.FC<InputFormType> = ({ name }) => {
  return (
    <div className={inputFormClass.wrapper}>
      <label className={inputFormClass.label} htmlFor={name}>
        {name}
      </label>
      <br />
      <input className={inputFormClass.input} id={name} placeholder={name} />
    </div>
  );
};

export default InputForm;
