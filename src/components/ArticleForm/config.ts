import { InputPropsWithoutErrors } from "../../types";

const InputFormCreateArticleProps: InputPropsWithoutErrors[] = [
  {
    name: 'title',
    label: 'Title',
    type: 'text',
    placeholder: 'Title',
    id: `${Math.random()}`,
    errorMassage: 'should not be empty',
    responseError: null,
    rules: {
      required: true,
      minLength: 1
    }
  },
  {
    name: 'description',
    label: 'Short description',
    type: 'text',
    id: `${Math.random()}`,
    placeholder: 'Title',
    errorMassage: 'should not be empty',
    responseError: null,
    rules: {
      required: true,
      minLength: 1
    }
  },
  {
    name: 'body',
    label: 'Text',
    type: 'text',
    placeholder: 'Text',
    textarea: true,
    id: `${Math.random()}`,
    style: { 'minHeight': '168px', 'maxHeight': 'fitContent' },
    errorMassage: 'should not be empty',
    responseError: null,
    rules: {
      required: true,
      minLength: 1
    }
  }
]

const InputFormTag: InputPropsWithoutErrors = {
  name: 'tag',
  type: 'text',
  placeholder: 'Tag',
  style: { width: '300px' },
  errorMassage: 'should not be empty',
  responseError: null,
  rules: {
    required: true,
    minLength: 1
  }
}


export {
  InputFormCreateArticleProps,
  InputFormTag
} 