import React, { useState } from 'react';
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { connect, ConnectedProps } from 'react-redux';
import signInFormClass from './SignForm.module.scss';
import { InputFormEditProps } from './config';
import { EditBody, ErrorResponse, ErrorResponseKey, FormDataEdit, InputProps, State } from '../../types';
import { editProfileRequest } from '../../services/serviceAPI';
import InputForm from '../InputForm/InputForm';
import * as actions from '../../store/actions/actions';

function responseErrorSearch(errorObj: ErrorResponse, props: InputProps): string | undefined {
  if (errorObj.errors) {
    const errkeys = Object.keys(errorObj.errors);
    const errkey = errkeys.find((key) => props.name === key) as ErrorResponseKey;
    return errkey !== undefined ? errorObj.errors[errkey]?.join() : undefined;
  }
  return undefined;
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

const ProfileEditForm: React.FC<Props> = ({ user, setUserAction }) => {
  const { register, handleSubmit, errors } = useForm<FormDataEdit>({ mode: 'onChange' });
  const [responseErrorObj, setResponseError] = useState<ErrorResponse>({});
  const [cookies, setCookie] = useCookies(['token']);
  const history = useHistory();

  if (cookies.token === undefined) history.push('/sign-in');

  const onSubmit = (data: FormDataEdit) => {
    const { email, password, image, username } = data;
    const body: EditBody = {
      user: { email, password, image, username },
    };

    editProfileRequest(body, cookies.token)
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
  };

  const contentInput = InputFormEditProps.map((input) => {
    const { rules, ...propsInput } = input;
    const responseError = responseErrorSearch(responseErrorObj, propsInput);
    const defaultValue = user !== null ? user[input.name] : undefined;
    const propsInputWithError = { ...propsInput, errors, responseError, defaultValue };
    return <InputForm key={input.name} {...propsInputWithError} ref={register(rules)} />;
  });

  return (
    <div className={signInFormClass.wrapperEdit}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={signInFormClass.title}>Edit Profile</h2>
        {contentInput}
        <Button className={signInFormClass.button} type="primary" htmlType="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default connector(ProfileEditForm);
