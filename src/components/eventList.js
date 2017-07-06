import Event  from './Event'
import { connect } from 'react-redux'
import React from 'react'
let EventList=(eventListsall)=>
(
  <div>
        {eventListsall.state.map(event => (
          <Event key={event.id} {...event}  />
        ))}
        </div>
)
const mapStateToProps = state => {
  return {
   state
  }
}
export default connect(mapStateToProps)(EventList)
