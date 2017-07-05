import React from 'react'
import PropTypes from 'prop-types'

const Event = (props) => (
  <div
    onClick={onClick}
    style={{
      textDecoration: props.registered ? 'line-through' : 'none'
    }}
  >
    <img width="75" src={props.topicImagePath}/>
    {props.topic}
    {props.presenterName}
    {props.description}
    {props.presenterName}
  </div>
)

Event.propTypes = {
  onClick: PropTypes.func.isRequired,
  registered: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  presenterName: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  topicImagePath: PropTypes.string.isRequired
}

export default Event
