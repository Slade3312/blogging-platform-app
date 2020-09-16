import { InputPropsWithoutErrors } from "../../types";

const InputFormSingInProps: InputPropsWithoutErrors[] = [
  {
    name: 'email',
    label: 'Email address',
    placeholder: 'Email address',
    id: `${Math.random()}`,
    type: 'email',
    errorMassage: 'Email address must be correct',
    responseError: null,
    rules: {
      required: true,
      pattern: /^[^@]+@[^@.]+\.[^@]+$/
    }
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Password',
    id: `${Math.random()}`,
    errorMassage: 'Password must be between 6 and 40 characters',
    responseError: null,
    rules: {
      required: true,
      maxLength: 40,
      minLength: 6,
    }
  }
]

export default InputFormSingInProps