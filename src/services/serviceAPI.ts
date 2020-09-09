/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ArticlesType } from '../types';

export const getArticles = async (): Promise<ArticlesType> => {
    const res = await fetch(`https://conduit.productionready.io/api/articles?limit=5`);
    return res.json()
}

export const getArticle = async (): Promise<ArticlesType> => {
    const res = await fetch(`https://conduit.productionready.io/api/articles/qwerty-g45bn2`);
    return res.json()
}