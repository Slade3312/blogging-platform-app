import React from 'react';
import { Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom';
import signUpFormClass from './SignUpForm.module.scss';
import InputForm from '../InputForm/InputForm';

function onChange(event: any) {
  console.log(`checked = ${event.target.checked}`);
}

const SignUpForm: React.FC = () => {
  return (
    <div className={signUpFormClass.wrapper}>
      <form>
        <h2 className={signUpFormClass.title}>Create new account</h2>
        <InputForm name="Username" />
        <InputForm name="Email address" />
        <InputForm name="Password" />
        <InputForm name="Repeat Password" />
        <hr className={signUpFormClass.hr} />
        <Checkbox className={signUpFormClass.checkbox} onChange={onChange}>
          I agree to the processing of my personal information
        </Checkbox>
        <Button className={signUpFormClass.button} type="primary">
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
