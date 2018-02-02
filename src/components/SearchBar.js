import React, { Component } from 'react';

class Search extends Component {

    // handle form submit
    onSubmitQuery = (e) => {
        e.preventDefault()
        this.props.onSubmitQuery(this.props.query)
    }

    // handle search input
    handleSearchInput = (e) => {
        this.props.handleSearchInput(e.target.value)
    }

    render() {
        return (
            <div className="Search my-3">
                <div className="input-group xy-shadow">
                    <input type="text" className="form-control" placeholder="Search for an Album" name="query" value={this.props.query} onChange={this.handleSearchInput} />
                    <div className="input-group-append">
                        <button type="button" className="btn btn-success" onClick={this.onSubmitQuery}>Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;