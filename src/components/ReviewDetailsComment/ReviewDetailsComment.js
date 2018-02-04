// library imports
import React from 'react'

const ReviewDetailsComment = (props) => {
    return (
      <div className='Comment'>
        <div className='card xy-shadow mx-5 my-2'>
          <div className='card-body'>
            <h5 className='card-title'>{props.comment.comment}</h5>
            <p>{props.comment.author}</p>
          </div>
        </div>
      </div>
    )
}

export default ReviewDetailsComment
