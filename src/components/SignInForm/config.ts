import { InputPropsWithoutErrors } from "../../types";

const InputFormSingInProps: InputPropsWithoutErrors[] = [
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
    name: 'Password',
    label: 'password',
    type: 'password',
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