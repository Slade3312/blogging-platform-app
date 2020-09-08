import React from 'react';
import appClass from './App.module.scss';
import TempComponent from '../TempComponent';
import Header from '../Header/Header';

const App: React.FC = () => {
  return (
    <div className={appClass.wrapper}>
      <TempComponent />
      <Header />
    </div>
  );
};

export default App;
