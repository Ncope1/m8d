// library imports
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// services
import { getReviewById, updateReview } from '../../services/reviews'

class EditForm extends Component {

    state = {
        _id: '',
        reviewTitle: '',
        albumTitle: '',
        comments: '',
        imageUrl: '',
        reviewBody: ''
    }

    componentWillMount() {
        getReviewById(this.props.match.params._id)
            .then((response) => {
                this.setState({
                    _id: response.data._id,
                    reviewTitle: response.data.reviewTitle,
                    albumTitle: response.data.albumTitle,
                    comments: response.data.comments,
                    imageUrl: response.data.imageUrl,
                    reviewBody: response.data.reviewBody
                })
            })
            .catch(err => console.log(err))
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
        updateReview(this.state._id, this.state)
            .then((response) => {
                window.location.href = '/m8d/reviews'
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div className="EditForm">
                <div className="card xy-shadow" >
                    <div className="card-body">
                        <h2 className="card-title">Edit: {this.state.reviewTitle}</h2>
                        <form onSubmit={this.handleSubmit}>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Review Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="reviewTitle"
                                    value={this.state.reviewTitle}
                                    onChange={this.handleInput}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Album Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="albumTitle"
                                    value={this.state.albumTitle}
                                    onChange={this.handleInput}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Image Url</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="imageUrl"
                                    value={this.state.imageUrl}
                                    onChange={this.handleInput}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Review</label>
                                <textarea
                                    rows="3"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="reviewBody"
                                    value={this.state.reviewBody}
                                    onChange={this.handleInput}
                                >
                                </textarea>
                            </div>

                            <button type="submit" className="btn btn-dark mx-1">Update</button>
                            <Link to="/m8d/reviews" className="btn btn-danger mx-1">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditForm
