import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'
import defaultMap from '../../utils/componentDefaults'

const getProp = (type, props) => {
  const properties = props.properties
  return properties[type] ? properties[type] : defaultMap[type]
}

const Component = styled.div`
  width: ${props => getProp('width', props) + 'px'}
  height: ${props => getProp('height', props) + 'px'}
  border-radius: ${props => getProp('border-radius', props) + 'px'}
  background: ${props => getProp('background', props)}
`

export default ({properties}) => <div>
  <Draggable defaultPosition={{x: 32, y: 32}} grid={[32, 32]}>
    <Component properties={properties}/>
  </Draggable>
</div>
