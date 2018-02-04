// library imports
import React, { Component } from 'react'

class ReviewDetailsComment extends Component {
  render() {
    return (
      <div className='Comment'>
        <div className='card xy-shadow mx-5 my-2'>
          <div className='card-body'>
            <h5 className='card-title'>{this.props.comment.comment}</h5>
            <p>{this.props.comment.author}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewDetailsComment
