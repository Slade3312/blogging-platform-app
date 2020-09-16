/* eslint-disable no-useless-escape */
import { InputPropsWithoutErrors } from "../../types";

const InputFormEditProps: InputPropsWithoutErrors[] = [
  {
    label: 'Username',
    name: 'username',
    type: 'text',
    placeholder: 'Username',
    id: `${Math.random()}`,
    errorMassage: 'Username must be between 3 and 20 characters',
    responseError: null,
    rules: {
      required: true,
      maxLength: 20,
      minLength: 3,
    }
  },
  {
    name: 'email',
    label: 'Email address',
    type: 'email',
    placeholder: 'Email address',
    id: `${Math.random()}`,
    errorMassage: 'Email address must be correct',
    responseError: null,
    rules: {
      required: true,
      pattern: /^[^@]+@[^@.]+\.[^@]+$/
    }
  },
  {
    name: 'password',
    label: 'New password',
    type: 'password',
    placeholder: 'New password',
    errorMassage: 'Password must be between 6 and 40 characters',
    responseError: null,
    id: `${Math.random()}`,
    rules: {
      required: true,
      maxLength: 40,
      minLength: 6,
    }
  },
  {
    label: 'Avatar image (url)',
    name: 'image',
    type: 'url',
    placeholder: 'Avatar image',
    errorMassage: 'enter correct url',
    id: `${Math.random()}`,
    responseError: null,
    rules: {
      required: true,
      pattern: /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/
    }
  },
]

export default InputFormEditProps