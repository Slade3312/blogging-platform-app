
// import Button, { ButtonProps } from 'antd/lib/button';
import { FieldErrors, ValidationRules } from 'react-hook-form';



export type ErrorState = {
    hasError: boolean
}

// !!!  Temp 
export type ActionsGetType = {
    type: Actions.getArticles,
    payload: ArticlesType
}

export enum Actions {
    getArticles = 'GET_ARTICLES'
}

export type State = {
    articles: ArticleType[],
    articlesCount: number
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
    label: string,
    type: string,
    errors?: FieldErrors,
    errorMassage?: string,
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
    Username: string;
    'Email address': string;
    Password: string;
    'Repeat Password': string;
};

export type FormDataSingIn = {
    Password: string;
    'Email address': string;
};
