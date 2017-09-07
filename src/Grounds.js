import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Map from './components/Map'
import MarkerList from './components/MarkerList'
import {colors, breakpoints} from './styles'
import {receiveMapBounds} from './actions'

class Grounds extends Component {
  onMoveend (map) {
    const bounds = map.target.getBounds()
    this.props.dispatch(receiveMapBounds(bounds))
  }

  render () {
    const { all, visible } = this.props

    return (<GroundsWrapper>
      <Header>
        <HeaderImage src='http://efl.org.au/wp-content/uploads/2016/06/logo-2.png' />
      </Header>
      <MarkerListWrapper>
        {visible && <MarkerList grounds={visible} />}
      </MarkerListWrapper>
      <MapWrapper>
        {all && <Map onMoveend={::this.onMoveend} grounds={all} />}
      </MapWrapper>
    </GroundsWrapper>)
  }
}

function mapStateToProps (state) {
  return {
    all: state.grounds.all,
    visible: state.grounds.visible
  }
}

export default connect(mapStateToProps)(Grounds)

const GroundsWrapper = styled.div`
  background-color: ${colors.$red};
  display: flex;
  flex-direction: row;

  @media (max-width: ${breakpoints.$small}) {
    flex-direction: column;
  }
`

const Header = styled.div`
  width: 100%;
  box-shadow: 0 0 12px 1px rgba(0,0,0,0.1);
  background: white;
  padding: 1rem 6rem;
  position: fixed;
  top: 0;
  z-index: 3;
`

const HeaderImage = styled.img`
  magin-right: 16rem;
  top: 1rem;
  height: 3rem;
`

const MapWrapper = styled.div`
  position: fixed;
  right: 2rem;
  width: 62%;
  height: 40rem;
  margin-top: 7.2rem;

  @media (max-width: ${breakpoints.$small}) {
    position: static;
    flex: 1;
    width: 100%;
    margin: 0;
  }
`

const MarkerListWrapper = styled.div`
  width: calc(35% - 3rem);
  margin-left: 2rem;
  margin-top: 7.2rem;

  &:before {
    height: 2.2rem;
    width: calc(35% - 3rem);
    background-color: ${colors.$red};
    content: ' ';
    position: fixed;
    display: inline-block;
    top: 5rem;
    z-index: 2;
  }

  @media (max-width: ${breakpoints.$small}) {
    flex: 1;
    width: 100%;
    margin: 0;
    margin-top: 7.2rem;
  }
`
