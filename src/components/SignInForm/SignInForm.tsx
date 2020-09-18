import React, { useState } from 'react';
import { Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect, ConnectedProps } from 'react-redux';
import { useCookies } from 'react-cookie';
import InputForm from '../InputForm/InputForm';
import { FormDataSingIn, State, AuthenticationBody } from '../../types';
import signInFormClass from './SignInForm.module.scss';
import InputFormSingInProps from './config';
import * as actions from '../../store/actions/actions';
import { authenticationRequest } from '../../services/serviceAPI';

function mapStateToProps(state: State) {
  const { user } = state;
  return {
    user,
  };
}

const mapDispatch = actions;
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const SignInForm: React.FC<Props> = ({ setUserAction }) => {
  const [responseError, setResponseError] = useState(false);
  const { register, handleSubmit, errors } = useForm<FormDataSingIn>({ mode: 'onChange' });
  const [cookies, setCookie] = useCookies(['token']);
  const history = useHistory();

  const onSubmit = (data: FormDataSingIn) => {
    setResponseError(false);
    const { email, password } = data;
    const body: AuthenticationBody = {
      user: { email, password },
    };
    authenticationRequest(body)
      .then((value) => {
        if (value.errors) {
          setResponseError(true);
        } else {
          const { token } = value.user;
          setCookie('token', token);
          setUserAction(value.user);
          setResponseError(false);
          history.push('/');
        }
      })
      .catch((err) => console.log(err));
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
        {responseError && <span className={signInFormClass.errSpan}>password or email is not correct</span>}
        <Button className={signInFormClass.button} type="primary" htmlType="submit">
          Login
        </Button>
        <span className={signInFormClass.span}>
          Don`t have an account? <Link to="/sign-up">Sign Up</Link>
        </span>
      </form>
    </div>
  );
};

export default connector(SignInForm);
