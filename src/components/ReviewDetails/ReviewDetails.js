// library imports
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// component imports
import { ReviewDetailsComment } from '../'

// service imports
import { getReviewById, deleteReviewById, createComment } from '../../services/reviews'
import { generateName } from '../../utilities/randomName'

class ReviewDetails extends Component {

    state = {
        review: {},
        comments: [],
        comment: '',
        author: ''
    }

    componentWillMount() {
        getReviewById(this.props.match.params._id)
            .then((response) => {
                this.setState({
                    review: response.data,
                    comments: response.data.comments
                })
            })
    }

    deleteReviewById = (id) => {
        deleteReviewById(id)
            .then((response) => {
                window.location.href = '/m8d/reviews'
            })
    }

    handleInput = (e) => {
        // per official react docs
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let post = {
            comment: this.state.comment,
            author: generateName()
        }
        createComment(this.state.review._id, post)
            .then((response) => {
                this.setState({
                    comments: response.data.comments
                })

            })
            .catch(err => console.log(err))
    }

    render() {
        let editLink = `/m8d/edit/${this.state.review._id}`
        let comment = this.state.comments.map((comment, index) => {
            return <ReviewDetailsComment comment={comment} key={index} />
        })
        return (
            <div className="ReviewDetails">
                <div className="row">
                    <div className="col-md-9">
                        <h1>{this.state.review.reviewTitle}</h1>
                    </div>
                    <div className="col-md-3">
                        <div className="float-right">
                            <Link to={editLink} className="btn btn-dark mx-1">
                                Edit <i className="fas fa-pencil-alt"></i>
                            </Link>
                            <button onClick={(e) => this.deleteReviewById(this.state.review._id)} className="btn btn-danger mx-1">
                                Delete <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-5">
                        <img src={this.state.review.imageUrl} className="img-fluid xy-shadow" alt={this.state.albumTitle} />
                    </div>
                    <div className="col-md-7">
                        <p>{this.state.review.reviewBody}</p>
                    </div>
                </div>
                <div className="comments my-4">
                    <h4>Comments</h4>
                    <hr />
                    <div className="input-group xy-shadow mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Add a comment..."
                            aria-label="Comment"
                            aria-describedby="basic-addon2"
                            name="comment"
                            value={this.state.comment}
                            onChange={this.handleInput}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-dark" type="button" onClick={this.handleSubmit}>Post Comment</button>
                        </div>
                    </div>
                    {comment}
                </div>
            </div>
        )
    }
}

export default ReviewDetails
