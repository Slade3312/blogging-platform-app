import { InputPropsWithoutErrors } from "../../types";

const InputFormSingInProps: InputPropsWithoutErrors[] = [
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
  }
]

export default InputFormSingInProps