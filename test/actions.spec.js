import test from 'tape'
import expect from 'expect'
import configureStore from 'redux-mock-store'
import * as actions from '../src/actions'

const initialState = {
  grounds: {
    all: [],
    visible: []
  }
}

test('receiveGrounds action', (t) => {
  let grounds = [
    { id: 0, title: 'East Ringwood Reserve' },
    { id: 1, title: 'Appleby Oval' }
  ]

  const mockStore = configureStore()
  const store = mockStore(initialState)
  store.dispatch(actions.receiveGrounds(grounds))

  t.deepEqual(
    store.getActions(),
    [{grounds: grounds, type: 'RECEIVE_GROUNDS'}],
    'receiveGrounds() should return grounds'
  )

  t.end()
})
