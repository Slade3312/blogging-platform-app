/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ArticlesType, ArticleFullType } from '../types';

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