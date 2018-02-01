import React, { Component } from 'react'
import { createReview } from '../services/reviews'
import { Link } from 'react-router-dom'

class Create extends Component {
    state = {
        title: '',
        album: '',
        imageUrl: ''
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
        // service call to Services/articles.js
        createReview(this.state)
            .then((response) => {
                console.log(response)
                window.location.href = '/'
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="Create container">
            <div className="card">
            <div className="card-body">
                        <h2 className="card-title">Add New Review</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Review Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.handleInput}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Album</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="album"
                                    value={this.state.album}
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
                            
                            <button type="submit" className="btn btn-info mx-1">Create</button>
                            <Link to="/" className="btn btn-danger mx-1">Cancel</Link>
                        </form>
                        </div>
                        </div>
            </div>
        )
    }
}

export default Create
