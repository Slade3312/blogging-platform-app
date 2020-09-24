import { ArticlesType, ArticleFullType, RegistrationBody, UserResponse, ErrorResponse, AuthenticationBody, EditBody, ArticleFormBody } from '../types';

export const getArticles = async (currentPage: number): Promise<ArticlesType> => {
  const OffSetPage = (currentPage - 1) * 5;
  const res = await fetch(`https://conduit.productionready.io/api/articles?limit=5&&offset=${OffSetPage}`)
  if (!res.ok) {
    throw new Error(`Could not fetch https://conduit.productionready.io/api/articles?limit=5&&offset=${OffSetPage} , received ${res.status}`);
  }
  return res.json()
}

export const getArticle = async (id: string): Promise<ArticleFullType> => {
  const res = await fetch(`https://conduit.productionready.io/api/articles/${id}`);
  if (!res.ok) {
    throw new Error(`https://conduit.productionready.io/api/articles/${id} , received ${res.status}`);
  }
  return res.json()
}

export const registrationRequest = async (body: RegistrationBody): Promise<UserResponse & ErrorResponse> => {

  const res = await fetch(`https://conduit.productionready.io/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  });
  return res.json()
}
export const authenticationRequest = async (body: AuthenticationBody): Promise<UserResponse & ErrorResponse> => {

  const res = await fetch(`https://conduit.productionready.io/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  });
  return res.json()
}

export const createArticleRequest = async (body: ArticleFormBody, token: string): Promise<ArticleFullType & ErrorResponse> => {

  const res = await fetch(`https://conduit.productionready.io/api/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Token ${token}`
    },
    body: JSON.stringify(body),
  });
  return res.json()
}

export const updateArticleRequest = async (body: ArticleFormBody, token: string, slug: string): Promise<ArticleFullType & ErrorResponse> => {

  const res = await fetch(`https://conduit.productionready.io/api/articles/${slug}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Token ${token}`
    },
    body: JSON.stringify(body),
  });
  return res.json()
}

export const deleteArticleRequest = async (slug: string, token: string): Promise<ArticleFullType & ErrorResponse> => {

  const res = await fetch(`https://conduit.productionready.io/api//articles/${slug}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Token ${token}`
    },
  });
  return res.json()
}



export const getUser = async (token: string): Promise<UserResponse> => {

  const res = await fetch(`https://conduit.productionready.io/api/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Token ${token}`
    }
  })
  if (!res.ok) {
    throw new Error(`Could not fetch https://conduit.productionready.io/api/user , received ${res.status}`);
  }
  return res.json()
}

export const editProfileRequest = async (body: EditBody, token: string): Promise<UserResponse & ErrorResponse> => {

  const res = await fetch(`https://conduit.productionready.io/api/user`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Token ${token}`
    },
    body: JSON.stringify(body),
  });
  return res.json()
}

export const setFavoriteArticle = async (token: string, slug: string): Promise<ArticleFullType & ErrorResponse> => {

  const res = await fetch(`https://conduit.productionready.io/api/articles/${slug}/favorite`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Token ${token}`
    },
  });
  return res.json()
}

export const deleteFavoriteArticle = async (token: string, slug: string): Promise<ArticleFullType & ErrorResponse> => {

  const res = await fetch(`https://conduit.productionready.io/api/articles/${slug}/favorite`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Token ${token}`
    },
  });
  return res.json()
}