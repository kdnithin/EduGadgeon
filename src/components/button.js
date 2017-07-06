import React from 'react';
import RegisterCourse  from '../actions/index'

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

export default class Button extends React.Component {
    
    render()
    {
        return(
            <button style={buttonStyle} onClick = {this.props.clickingProps}>{this.props.label}</button>
        )
    }
}