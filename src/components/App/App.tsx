/* eslint-disable react/no-children-prop */
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import appClass from './App.module.scss';
import Header from '../Header/Header';
import ArticlesList from '../ArticlesList/ArticlesList';
import ArticleFull from '../ArticleFull/ArticleFull';

const App: React.FC = () => {
  return (
    <div className={appClass.wrapper}>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/articles?page=1" />
        <Route exact path="/articles">
          <ArticlesList />
        </Route>
        <Route path="/articles/:artId">
          <ArticleFull />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
