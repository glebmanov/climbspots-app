/**
 * @jest-environment jsdom
 */

import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Provider } from 'react-redux'
import store from '../src/store'

import Weather from '../src/containers/Weather'

describe('Weather container', () => {
  test('Weather render', () => {
    render(
      <Provider store={store}>
        <Weather />
      </Provider>,
    )
    expect(screen.getByText('Выберите район')).toBeInTheDocument()
  })
})
