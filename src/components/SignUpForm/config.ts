import { InputPropsWithoutErrors } from "../../types";

const InputFormSingUpProps: InputPropsWithoutErrors[] = [
  {
    label: 'Username',
    name: 'username',
    type: 'text',
    placeholder: 'Username',
    errorMassage: 'Username must be between 3 and 20 characters',
    responseError: null,
    id: `${Math.random()}`,
    rules: {
      required: true,
      maxLength: 20,
      minLength: 3,
    }
  },
  {
    label: 'Email address',
    name: 'email',
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
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    id: `${Math.random()}`,
    errorMassage: 'Password must be between 6 and 40 characters',
    responseError: null,
    rules: {
      required: true,
      maxLength: 40,
      minLength: 8,
    }
  },
  {
    label: 'Repeat Password',
    name: 'repeatPassword',
    type: 'password',
    placeholder: 'Repeat Password',
    id: `${Math.random()}`,
    errorMassage: 'Passwords should match!',
    responseError: null,
    rules: {
      required: true,
    }
  },
];

export default InputFormSingUpProps
