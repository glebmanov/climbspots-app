import React from 'react'
import Weather from '../src/containers/Weather'
import Header from './containers/Header'

import './styles/app.scss'

const App = () => {
  return (
    <div className='container'>
      <header>
        <Header />
      </header>
      <main>
        <Weather />
      </main>
    </div>
  )
}

export default App
