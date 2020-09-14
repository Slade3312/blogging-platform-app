import React, { useState } from 'react';
import { Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import signUpFormClass from './SignUpForm.module.scss';
import InputForm from '../InputForm/InputForm';
import { FormDataSingUp } from '../../types';
import InputFormSingUpProps from './config';

const SignUpForm: React.FC = () => {
  const { register, handleSubmit, errors, getValues } = useForm<FormDataSingUp>({ mode: 'onChange' });
  const [agree, setAgree] = useState(false);

  const onSubmit = (data: FormDataSingUp) => {
    if (!agree) return;
    console.log(data);
  };

  const validate = {
    matchesPreviousPassword: (value: string) => {
      const { Password } = getValues();
      return Password === value;
    },
  };
  InputFormSingUpProps[3].rules = { ...InputFormSingUpProps[3].rules, validate };

  const contentInput = InputFormSingUpProps.map((input) => {
    const { rules, ...propsInput } = input;
    const propsInputWithError = { ...propsInput, errors };
    return <InputForm {...propsInputWithError} ref={register(rules)} />;
  });

  return (
    <div className={signUpFormClass.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={signUpFormClass.title}>Create new account</h2>
        {contentInput}
        <hr className={signUpFormClass.hr} />
        <Checkbox name="I agree" className={signUpFormClass.checkbox} onChange={() => setAgree(!agree)}>
          I agree to the processing of my personal information
        </Checkbox>
        <Button className={signUpFormClass.button} type="primary" htmlType="submit">
          Create
        </Button>
        <span className={signUpFormClass.span}>
          Already have an account? <Link to="/sign-in">Sign In</Link>
        </span>
      </form>
    </div>
  );
};

export default SignUpForm;
