import React, { useState } from 'react';
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { connect, ConnectedProps } from 'react-redux';
import profileEditFormClass from './ProfileEditForm.module.scss';
import InputFormEditProps from './config';
import { EditBody, ErrorResponse, ErrorResponseKey, FormDataEdit, InputProps, State } from '../../types';
import { editProfileRequest } from '../../services/serviceAPI';
import InputForm from '../InputForm/InputForm';
import * as actions from '../../store/actions/actions';

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

const ProfileEditForm: React.FC<Props> = ({ setUserAction }) => {
  const { register, handleSubmit, errors } = useForm<FormDataEdit>({ mode: 'onChange' });
  const [responseErrorObj, setResponseError] = useState<ErrorResponse>({});
  const [cookies, setCookie] = useCookies(['token']);
  const history = useHistory();

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
    const propsInputWithError = { ...propsInput, errors, responseError };
    return <InputForm {...propsInputWithError} ref={register(rules)} />;
  });

  return (
    <div className={profileEditFormClass.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={profileEditFormClass.title}>Edit Profile</h2>
        {contentInput}
        <Button className={profileEditFormClass.button} type="primary" htmlType="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default connector(ProfileEditForm);
