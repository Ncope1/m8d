// library imports
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// service imports
import { createReview } from '../../services/reviews'

class CreateForm extends Component {
    state = {
        reviewTitle: '',
        albumTitle: '',
        imageUrl: '',
        reviewBody: ''
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
        createReview(this.state)
            .then((response) => {
                window.location.href = '/m8d/reviews'
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="Create container">
            <div className="card xy-shadow">
            <div className="card-body">
                        <h2 className="card-title">Add New Review</h2>
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

                            <button type="submit" className="btn btn-dark mx-1">Create</button>
                            <Link to="/" className="btn btn-danger mx-1">Cancel</Link>
                        </form>
                        </div>
                        </div>
            </div>
        )
    }
}

export default CreateForm
