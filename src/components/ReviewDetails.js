import React, { Component } from 'react';
import { getReviewById, deleteReviewById } from '../services/reviews'
import { Link } from 'react-router-dom'

class ReviewDetails extends Component {

    state = {
        review: {}
    }

    componentDidMount() {
        console.log(this.props.match.params._id)
        getReviewById(this.props.match.params._id)
            .then((response) => {
                console.log(response)
                this.setState({
                    review: response.data
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

    render() {
        let editLink = `/edit/${this.state.review._id}`

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
            </div>
        )
    }
}

export default ReviewDetails;
