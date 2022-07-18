import React from 'react';
import Weather from '../src/containers/Weather';
import Header from './containers/Header';

import './styles/app.scss';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Weather />
    </div>
  );
};

export default App;
