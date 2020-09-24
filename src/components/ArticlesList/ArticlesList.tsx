import React, { useEffect, useState } from 'react';
// import { connect, ConnectedProps } from 'react-redux';
import { Pagination, Spin, Alert } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import articlesClass from './ArticlesList.module.scss';
import { ArticlesType } from '../../types';
import Article from '../Article/Article';
import { getArticles } from '../../services/serviceAPI';

const ArticlesList: React.FC = () => {
  const [articlesObj, setArticlesObj] = useState<ArticlesType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const location = useLocation();
  const history = useHistory();

  let content = null;
  let pages = 0;

  useEffect(() => {
    setLoading(true);
    getArticles(Number(location.search.match(/\d+/g)?.[0]))
      .then((value) => {
        setLoading(false);
        setArticlesObj(value);
        console.log('fetch', value);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, [location.search]);

  if (articlesObj) {
    const { articles, articlesCount } = articlesObj;
    pages = articlesCount;
    content = articles.map((article) => {
      const key = article.slug;
      return <Article key={key} {...article} />;
    });
  }

  return (
    <div className={articlesClass.wrapper}>
      {loading && !error ? <Spin className={articlesClass.spin} tip="Loading..." /> : content}
      {error ? <Alert message="Sorry, but we were unable to load articles" type="error" /> : null}
      <Pagination
        className={articlesClass.pagination}
        size="small"
        showSizeChanger={false}
        onChange={(page) => {
          history.replace({ search: `page=${page}` });
        }}
        pageSize={5}
        total={pages}
        current={Number(location.search.match(/\d+/g)?.[0])}
      />
    </div>
  );
};

export default ArticlesList;
