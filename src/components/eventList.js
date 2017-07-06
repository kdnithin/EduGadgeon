import Event  from './Event'
import { connect } from 'react-redux'
import React from 'react'
import {RegisterCourse}  from '../actions'

let EventList=(props)=>
(
  <div>
        {props.state.map(event => (
          <Event key={event.id} {...event} onClick={()=>props.registerOnClick(event.id)} />
        ))}
         
        </div>
)
const mapStateToProps = state => {
  return {
   state
  }
}

const mapDispatchToProps = (dispatch) =>
{
   return {
   registerOnClick: (id) => {dispatch(RegisterCourse(id));}
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(EventList)
