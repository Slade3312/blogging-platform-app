
// import Button, { ButtonProps } from 'antd/lib/button';
import { FieldErrors, ValidationRules } from 'react-hook-form';



export type ErrorState = {
  hasError: boolean
}

// !!!  Temp 
export type ActionSetUser = {
  type: Actions.setUser,
  payload: User | null
}

export enum Actions {
  getArticles = 'GET_ARTICLES',
  setUser = "SET_USER"
}

export type State = {
  user: User | null
}
// !!
export type ButtonProps = {
  className?: string
  variant?: 'sign' | undefined
  onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
  value?: string | undefined
}

export type ArticlesType = {
  articles: ArticleType[],
  articlesCount: number
}

export type ArticleFullType = {
  article: ArticleType
}

export type ArticleType = {
  full?: boolean
  slug: string,
  title: string,
  description: string,
  body: string,
  tagList: string[],
  createdAt: string,
  updatedAt: string,
  favorited: false,
  favoritesCount: number,
  author: {
    username: string,
    bio: string,
    image: string,
    following: false
  }
}

export type InputProps = {
  label?: string,
  name: string,
  value?: string
  type: string,
  readOnly?: boolean,
  style?: {
    width?: string,
    'min-height'?: string,
    'max-height'?: string,
  },
  id?: string
  textarea?: boolean,
  placeholder?: string
  errors?: FieldErrors,
  errorMassage?: string,
  responseError?: string | null
  rules?: ValidationRules
};

export type InputPropsWithoutErrors = Omit<InputProps, 'errors'>;

// export type InputFormType = {
//     label?: string,
//     type?: 'text' | 'email'
//     onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined,
//     errorMassage?: string,
//     name?: string,
// }

export type FormDataSingUp = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export type FormDataSingIn = {
  password: string;
  email: string;
};

export type FormDataEdit = {
  username: string;
  email: string;
  password: string;
  image: string;
};

export type FormDataArticle = {
  title: string,
  description: string,
  body: string,
  tagList?: string[]
};

export type FormDataTags = {
  tag: string,
};

export type EditBody = {
  user: {
    username: string;
    email: string;
    password: string;
    image: string;
  }
}


export type RegistrationBody = {
  user: {
    username: string,
    email: string,
    password: string
  }
}

export type AuthenticationBody = {
  user: {
    email: string,
    password: string
  }
}

export type CreateArticleBody = {
  article: {
    title: string,
    description: string,
    body: string,
    tagList?: string[]
  }
}

export type UserResponse = {
  user: User
}

export type User = {
  email: string,
  token: string,
  username: string,
  bio: string,
  image: string,
  id: number
  createdAt: string,
  updatedAt: string
}

export type ErrorResponse = {
  errors?: {
    body?: string[]
    email?: string[],
    username?: string[],
  }
}

export type ErrorResponseKey = 'email' | 'username' | 'body'



