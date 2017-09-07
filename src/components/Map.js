import React, { Component } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import {colors} from '../styles'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      centerPosition: [-37.8092105, 145.2433639],
      zoom: 12
    }
  }

  onMoveend (map) {
    this.props.onMoveend(map)
  }

  render () {
    const {grounds} = this.props
    const {centerPosition, zoom} = this.state

    return (
      <Map
        center={centerPosition}
        zoom={zoom}
        onMoveend={::this.onMoveend}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {
        grounds.map((ground, i) => {
          const position = [parseFloat(ground.lat), parseFloat(ground.long)]

          const icon = L.icon({
            iconUrl: 'http://gwsgiants.azurewebsites.net/images/background/ball-large.png',
            iconSize: [16, 16],
            popupAnchor: [0, -20]
          })

          return (
            <Marker icon={icon} key={i} position={position}>
              <Popup>
                <Row>
                  <Column>
                    <Title>{`${ground.team}`}</Title>
                  </Column>
                  <Column>
                    <Field>{ground.title}</Field>
                  </Column>
                  <GroundImage src={ground.image_url} />
                  <Column>
                    <Label>Address: </Label>
                    <Field>{ground.address}</Field>
                  </Column>
                </Row>
              </Popup>
            </Marker>
          )
        })
      }
      </Map>
    )
  }
}

const Row = styled.span`
  display: flex;
  flex-direction: column;
`
const Column = styled.div`
  padding: 2px 0;
  margin-left: 2rem;
`

const Field = styled.span`
  color: ${colors.$black};
`

const Label = styled.span`
  font-weight: bold;
`

const Time = styled.div`
  color: ${colors.$grey_mid};
`

const Title = styled.span`
  display: inline-block;
  color: ${colors.$red};
  margin: 0;
  font-size: 1.6rem;
`

const GroundImage = styled.img`
  margin-left: 2rem;
  width: 8rem;
`

const Type = styled.span`
  margin: 0;
`
