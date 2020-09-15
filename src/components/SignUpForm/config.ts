import { InputPropsWithoutErrors } from "../../types";

const InputFormSingUpProps: InputPropsWithoutErrors[] = [
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
    label: 'email',
    name: 'Email address',
    type: 'email',
    errorMassage: 'Email address must be correct',
    responseError: null,
    rules: {
      required: true,
      pattern: /^[^@]+@[^@.]+\.[^@]+$/
    }
  },
  {
    label: 'password',
    name: 'Password',
    type: 'password',
    errorMassage: 'Password must be between 6 and 40 characters',
    responseError: null,
    rules: {
      required: true,
      maxLength: 40,
      minLength: 8,
    }
  },
  {
    label: 'repeatPassword',
    name: 'Repeat Password',
    type: 'password',
    errorMassage: 'Passwords should match!',
    responseError: null,
    rules: {
      required: true,
    }
  },
];

export default InputFormSingUpProps
