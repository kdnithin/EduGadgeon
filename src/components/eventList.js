import Event  from './Event'
import Posts  from './Posts'
import { connect } from 'react-redux'
import React from 'react'
import {FetchCourseList}  from '../actions'
import { bindActionCreators } from 'redux';

let EventList=(props)=>
(
 
  <div>
     {props.state.isLoading ? 'Loading' : ''}
     <button onClick={()=>props.fetchCourses()}> Fetch Posts from Reddit API </button>
     <Posts posts={props.state.events}/>
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
     fetchCourses : () => {
       dispatch(FetchCourseList());
     }
   }

};
export default connect(mapStateToProps,mapDispatchToProps)(EventList)
