import React, { Component } from 'react'
import styled from 'styled-components'
import {colors, breakpoints} from '../styles'
import onClickOutside from 'react-onclickoutside'

class MarkerListApp extends Component {
  constructor () {
    super()
    this.state = {
      open: false
    }
  }

  handleClickOutside = evt => {
    this.setState({open: false})
  }

  handleMarkerClick (ground) {
    this.setState({open: !this.state.open})
  }

  render () {
    const {grounds} = this.props
    const {open} = this.state

    return (
      <MarkerListWrapper>
        <MarkerHeader onClick={() => this.handleMarkerClick()}>
          <svg width='24' height='24' viewBox='0 0 24 24'>
            <g fill='currentColor'>
              <path d='M11 6h2v12h-2z' /><path d='M18 11v2H6v-2z' />
            </g>
          </svg>
          <Title style={{marginLeft: '1rem'}}>{`${grounds.length} Grounds`}</Title>
        </MarkerHeader>

        <MarkerList open={open}>
          {
            grounds.map((ground, i) => {
              return (
                <MarkerItem key={i}>
                  <Title>{`${ground.team}`}</Title>
                  <FieldWrapper>
                    <Field alert={true}>{`${ground.title}`}</Field>
                  </FieldWrapper>
                </MarkerItem>
              )
            })
          }
        </MarkerList>
      </MarkerListWrapper>
    )
  }
}

export default onClickOutside(MarkerListApp)

const MarkerListWrapper = styled.div`
  background-color: ${colors.$white};
  margin-right: 1rem;
  position: relative;

  @media (max-width: ${breakpoints.$small}) {
    margin-right: 0;
  }
`

const MarkerList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;

  @media (max-width: ${breakpoints.$small}) {
    transition: height 250ms ease-in-out;
    height: ${props => props.open ? '33.5rem' : '0'};
    background-color: ${colors.$white};
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    z-index: 2000;
  }
`

const MarkerItem = styled.li`
  padding: 1rem;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: Column;
  position: relative;
  border-bottom: 0.2rem solid ${colors.$grey_dark};
`

const MarkerHeader = styled.div`
  padding: 1.4rem 1rem;
  margin: 0;
  cursor: pointer;
  color: ${colors.$red};
  svg {
    vertical-align: bottom;
    margin-right: 2rem;
  }
  @media (min-width: ${breakpoints.$small}) {
    display: none;
  }
`

const Title = styled.p`
  display: inline-block;
  color: ${colors.$red};
  margin: 0;
  margin-left: 4rem;
  font-size: 1.6rem;

  @media (max-width: ${breakpoints.$small}) {
    margin-left: 5.5rem;
  }
`

const FieldWrapper = styled.div`
  margin: 0;
  margin-left: 4rem;
  @media (max-width: ${breakpoints.$small}) {
    margin-left: 5.5rem;
  }
`

const Field = styled.span`
  color: ${props => props.alert ? colors.$grey_dark : colors.$black};
`
