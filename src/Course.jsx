import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Course extends React.Component 
{
  render() 
  {
    return (
      <div>
        <p><b>Course Title:</b> {this.props.title}</p>
        <p><b>Duration of Course (in weeks):</b> {this.props.duration}</p>
        <p><b>Instructor Name:</b> {this.props.name}</p>
      </div>
    )
  }
}

Course.propTypes = {
    title:PropTypes.string.isRequired,
    duration:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
}

export default Course
