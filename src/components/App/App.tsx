/* eslint-disable react/no-children-prop */
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import appClass from './App.module.scss';
import Header from '../Header/Header';
import ArticlesList from '../ArticlesList/ArticlesList';
import ArticleFull from '../ArticleFull/ArticleFull';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import ProfileEditForm from '../ProfileEditForm/ProfileEditForm';
import CreateArticle from '../CreateArticle/CreateArticle';

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
        <Route exact path="/sign-in">
          <SignInForm />
        </Route>
        <Route exact path="/sign-up">
          <SignUpForm />
        </Route>
        <Route path="/profile">
          <ProfileEditForm />
        </Route>
        <Route path="/new-article">
          <CreateArticle />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
