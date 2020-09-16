import React, { useState } from 'react';
import { Checkbox, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { connect, ConnectedProps } from 'react-redux';
import * as actions from '../../store/actions/actions';
import signUpFormClass from './SignUpForm.module.scss';
import InputForm from '../InputForm/InputForm';
import { FormDataSingUp, RegistrationBody, ErrorResponse, ErrorResponseKey, InputProps, State } from '../../types';
import InputFormSingUpProps from './config';
import { registrationRequest } from '../../services/serviceAPI';

function responseErrorSearch(errorObj: ErrorResponse, props: InputProps): string | null {
  if (errorObj.errors) {
    const errkeys = Object.keys(errorObj.errors);
    const errkey = errkeys.find((key) => props.label === key) as ErrorResponseKey;
    return errkey !== undefined ? errorObj.errors[errkey]!.join() : null;
  }
  return null;
}

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

const SignUpForm: React.FC<Props> = ({ setUserAction }) => {
  const [cookies, setCookie] = useCookies(['token']);
  const [responseErrorObj, setResponseError] = useState<ErrorResponse>({});
  const { register, handleSubmit, errors, getValues } = useForm<FormDataSingUp>({ mode: 'onChange' });
  const [agree, setAgree] = useState(false);
  const history = useHistory();

  function onSubmit(data: FormDataSingUp) {
    if (!agree) return;
    const { username, email, password } = data;
    const body: RegistrationBody = {
      user: { username, email, password },
    };
    registrationRequest(body)
      .then((value) => {
        if (value.errors) {
          const respError = value;
          setResponseError(respError);
        } else {
          const { token } = value.user;
          setCookie('token', token);
          setUserAction(value.user);
          history.push('/');
        }
      })
      .catch((err) => console.log(err));
  }

  const validate = {
    matchesPreviousPassword: (value: string) => {
      const { password } = getValues();
      return password === value;
    },
  };
  InputFormSingUpProps[3].rules = { ...InputFormSingUpProps[3].rules, validate };

  const contentInput = InputFormSingUpProps.map((input) => {
    const { rules, ...propsInput } = input;
    const responseError = responseErrorSearch(responseErrorObj, propsInput);
    const propsInputWithError = { ...propsInput, errors, responseError };
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

export default connector(SignUpForm);
