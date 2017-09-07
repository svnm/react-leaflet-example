import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import Map from '../src/components/Map'

test('Map component', (t) => {
  setupJsdom()

  const onMoveend = () => {
    console.log('moving finished...')
  }

  let grounds = [
    { id: 0, title: 'East Ringwood Reserve' },
    { id: 1, title: 'Appleby Oval' }
  ]

  const wrapper = mount(
    <Map onMoveend={onMoveend} grounds={grounds} />
  )

  t.pass(
    expect(wrapper.props().grounds).toEqual(grounds)
  )

  t.pass(
    expect(wrapper.props().onMoveend).toEqual(onMoveend)
  )

  t.end()
});
