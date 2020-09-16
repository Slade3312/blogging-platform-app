/* eslint-disable no-useless-escape */
import { InputPropsWithoutErrors } from "../../types";

const InputFormEditProps: InputPropsWithoutErrors[] = [
  {
    label: 'username',
    name: 'Username',
    type: 'text',
    errorMassage: 'Username must be between 3 and 20 characters',
    responseError: null,
    rules: {
      required: true,
      maxLength: 20,
      minLength: 3,
    }
  },
  {
    name: 'Email address',
    label: 'email',
    type: 'email',
    errorMassage: 'Email address must be correct',
    responseError: null,
    rules: {
      required: true,
      pattern: /^[^@]+@[^@.]+\.[^@]+$/
    }
  },
  {
    name: 'New password',
    label: 'password',
    type: 'password',
    errorMassage: 'Password must be between 6 and 40 characters',
    responseError: null,
    rules: {
      required: true,
      maxLength: 40,
      minLength: 6,
    }
  },
  {
    label: 'image',
    name: 'Avatar image',
    type: 'text',
    errorMassage: 'enter correct url',
    responseError: null,
    rules: {
      required: true,
      pattern: /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/
    }
  },
]

export default InputFormEditProps