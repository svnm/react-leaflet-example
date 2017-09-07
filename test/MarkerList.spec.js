import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import MarkerList from '../src/components/MarkerList'

test('MarkerList component', (t) => {
  setupJsdom()

  let grounds = [
    { id: 0, title: 'East Ringwood Reserve' },
    { id: 1, title: 'Appleby Oval' }
  ]

  const wrapper = mount(
    <MarkerList grounds={grounds} />
  )

  t.pass(
    expect(wrapper.props().grounds).toEqual(grounds)
  )

  t.end()
});
