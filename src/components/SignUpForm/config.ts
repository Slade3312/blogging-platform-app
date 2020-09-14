import { InputPropsWithoutErrors } from "../../types";

const InputFormSingUpProps: InputPropsWithoutErrors[] = [
  {
    label: 'Username',
    type: 'text',
    errorMassage: 'Username must be between 3 and 20 characters',
    rules: {
      required: true,
      maxLength: 20,
      minLength: 3,
    }
  },
  {
    label: 'Email address',
    type: 'email',
    errorMassage: 'Email address must be correct',
    rules: {
      required: true,
      pattern: /^[^@]+@[^@.]+\.[^@]+$/
    }
  },
  {
    label: 'Password',
    type: 'password',
    errorMassage: 'Password must be between 6 and 40 characters',
    rules: {
      required: true,
      maxLength: 40,
      minLength: 6,
    }
  },
  {
    label: 'Repeat Password',
    type: 'password',
    errorMassage: 'Passwords should match!',
    rules: {
      required: true,
    }
  },
];

export default InputFormSingUpProps
