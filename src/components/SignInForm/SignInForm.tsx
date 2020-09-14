import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InputForm from '../InputForm/InputForm';
import { FormDataSingIn } from '../../types';
import signInFormClass from './SignInForm.module.scss';
import InputFormSingInProps from './config';

const SignInForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormDataSingIn>({ mode: 'onChange' });

  const onSubmit = (data: FormDataSingIn) => {
    console.log(data);
  };

  const contentInput = InputFormSingInProps.map((input) => {
    const { rules, ...propsInput } = input;
    const propsInputWithError = { ...propsInput, errors };
    return <InputForm {...propsInputWithError} ref={register(rules)} />;
  });

  return (
    <div className={signInFormClass.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={signInFormClass.title}>Sign In</h2>
        {contentInput}
        <Button className={signInFormClass.button} type="primary" htmlType="submit">
          Create
        </Button>
        <span className={signInFormClass.span}>
          Don`t have an account? <Link to="/sign-up">Sign Up</Link>
        </span>
      </form>
    </div>
  );
};

export default SignInForm;
