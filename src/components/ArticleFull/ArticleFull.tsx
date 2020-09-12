import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spin, Alert } from 'antd';
import articleFullClass from './ArticleFull.module.scss';
import { getArticle } from '../../services/serviceAPI';
import { ArticleType } from '../../types';
import Article from '../Article/Article';

const ArticleFull: React.FC = () => {
  const { artId } = useParams();
  const [article, setArticle] = useState<ArticleType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getArticle(artId)
      .then((value) => {
        setLoading(false);
        setArticle(value.article);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [artId]);

  const content = article ? <Article {...(article as ArticleType)} full /> : null;

  return (
    <div className={articleFullClass.wrapper}>
      {loading && !error ? <Spin className={articleFullClass.spin} tip="Loading..." /> : null}
      {error ? <Alert message="Sorry, but we were unable to load article" type="error" /> : null}
      {content}
    </div>
  );
};

export default ArticleFull;
