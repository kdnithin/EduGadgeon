import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

//var registerButton;

const Event = (props) => (
  <div>
    <img width="75" src={props.topicImagePath}/>
    {props.topic}
    {props.presenterName}
    {props.description}
    {props.eventDate}
    <Button clickingProps={props.onClick} eventID = {props.Id} label = {props.registered? "UnRegister" : "Register"}/>
    </div>
 
)

Event.propTypes = {
  registered: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  presenterName: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  topicImagePath: PropTypes.string.isRequired
}

export default Event
