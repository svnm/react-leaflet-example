import { takeLatest, put, call, fork, select } from 'redux-saga/effects'
import { RECEIVE_GROUNDS, RECEIVE_VISIBLE_GROUNDS, RECEIVE_MAP_BOUNDS } from './actions'
import {visibleSelector} from './selectors'

export function fetchGroundsApi () {
  const url = `http://localhost:5000/api/grounds`
  return new Promise((resolve) => {
    fetch(url)
    .then((res) => {
      return res.json()
    }).then((res) => {
      return resolve(res.grounds)
    })
  })
}

export function* fetchGrounds () {
  const grounds = yield call(fetchGroundsApi)
  yield put({type: RECEIVE_GROUNDS, grounds})
  yield put({type: RECEIVE_VISIBLE_GROUNDS, visible: grounds})
}

export function* filterVisibleGrounds () {
  const visible = yield select(visibleSelector)
  yield put({type: RECEIVE_VISIBLE_GROUNDS, visible})
}

export default function* root () {
  yield fork(fetchGrounds)
  yield takeLatest(RECEIVE_MAP_BOUNDS, filterVisibleGrounds)
}
