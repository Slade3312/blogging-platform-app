import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import InputForm from '../InputForm/InputForm';
import signInFormClass from './SignInForm.module.scss';

const SignInForm: React.FC = () => {
  return (
    <div className={signInFormClass.wrapper}>
      <form>
        <h2 className={signInFormClass.title}>Sign In</h2>
        <InputForm name="Email address" />
        <InputForm name="Password" />
        <Button className={signInFormClass.button} type="primary">
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
