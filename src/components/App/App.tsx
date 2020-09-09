import React from 'react';
import appClass from './App.module.scss';
import Header from '../Header/Header';
import ArticlesList from '../ArticlesList/ArticlesList';

const App: React.FC = () => {
  return (
    <div className={appClass.wrapper}>
      <Header />
      <ArticlesList />
    </div>
  );
};

export default App;
