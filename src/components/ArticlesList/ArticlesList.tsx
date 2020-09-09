import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import contentClass from './ArticlesList.module.scss';
import { State } from '../../types';
import Article from '../Article/Article';
import * as actions from '../../store/actions/actions';

function mapStateToProps(state: State) {
  const { articles } = state;
  return {
    articles,
  };
}

const mapDispatch = actions;
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const ArticlesList: React.FC<Props> = ({ articles, getArticlesAction }) => {
  useEffect(() => {
    getArticlesAction();
  }, [getArticlesAction]);

  let content = null;

  if (articles.length !== 0) {
    content = articles.map((article) => {
      const key = article.slug;
      return <Article key={key} {...article} />;
    });
  }

  return <div className={contentClass.wrapper}>{content}</div>;
};

export default connector(ArticlesList);
