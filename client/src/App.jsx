import React from 'react';
import Weather from '../src/containers/Weather';

import './styles/index.scss';
import './styles/weather.scss';

const App = () => {
  return (
    <div className='container'>
      <Weather />
    </div>
  );
};

export default App;
