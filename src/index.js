/* eslint no-duplicate-imports: 0 */

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagaMonitor from 'redux-saga'
import Grounds from './Grounds'
import rootSaga from './sagas'
import rootReducer from './reducers'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware({sagaMonitor})
  const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)))
  sagaMiddleware.run(rootSaga)
  return store
}

function render () {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <Grounds />
    </Provider>,
    document.getElementById('root'))
}

render()
