import React, { Component } from 'react';
import { getReviewById, deleteReviewById, createComment } from '../services/reviews'
import { Link } from 'react-router-dom'
import Comment from './Comment'
import { generateName } from '../utilities/randomName'

class ReviewDetails extends Component {

    state = {
        review: {},
        comments: [],
        comment: '',
        author: 'ANONYMOUS'
    }

    componentDidMount() {
        console.log(this.props.match.params._id)
        getReviewById(this.props.match.params._id)
            .then((response) => {
                // console.log(response)
                this.setState({
                    review: response.data,
                    comments: response.data.comments
                })
                console.log(this.state.review)
            })
    }

    deleteReviewById = (id) => {
        deleteReviewById(id)
            .then((response) => {
                console.log(response)
                window.location.href = '/'
            })
    }

    handleInput = (e) => {
        // per official react docs
        const target = e.target;
        const value = target.value;
        const name = target.name;

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
        // service call to Services/articles.js
        createComment(this.state.review._id, post)
            .then((response) => {
                console.log(response)
                this.setState({
                    comments: response.data.comments
                })

            })
            .catch(err => console.log(err))
    }

    render() {
        let editLink = `/edit/${this.state.review._id}`
        let comment = this.state.comments.map((comment, index) => {
            return <Comment comment={comment} key={index} />
        })
        return (
            <div>
                <h1>{this.state.review.reviewTitle}</h1>
                <p>{this.state.review.albumTitle}</p>
                <img src={this.state.review.imageUrl} className="img-fluid" alt={this.state.albumTitle} />
                <p>{this.state.review.reviewBody}</p>
                <Link to={editLink} className="btn btn-secondary mx-1">
                    Edit&nbsp;<i className="fa fa-pencil" aria-hidden="true"></i>
                </Link>
                <button onClick={(e) => this.deleteReviewById(this.state.review._id)} className="btn btn-danger mx-1">
                    Delete&nbsp;<i className="fa fa-trash" aria-hidden="true"></i>
                </button>

                <hr />

                <div className="input-group mb-3">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Comment"
                            aria-label="Comment"
                            aria-describedby="basic-addon2"
                            name="comment"
                            value={this.state.comment}
                            onChange={this.handleInput}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="submit">Post</button>
                        </div>
                    </form>
                </div>

                {comment}

            </div>
        )
    }
}

export default ReviewDetails;
