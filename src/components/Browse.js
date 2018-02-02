import React, { Component } from 'react'
import SearchBar from './SearchBar'
import { getAlbumByTitle, getNewReleases } from '../services/albums'
import { Link } from 'react-router-dom'

class Browse extends Component {
    state = {
        query: '',
        albums: []
    }

    // on mount populate list
    componentDidMount() {
        getNewReleases()
            .then((response) => {
                this.setState({
                    albums: response.data.albums.items,
                })
                console.log(this.state.albums)
            })
    }

    // handle query submit from child component
    onSubmitQuery = () => {
        getAlbumByTitle(this.state.query)
            .then((response) => {
                this.setState({
                    albums: response.data,
                })
                console.log(this.state.albums)
            })
    }

    // handle search input from child component
    handleSearchInput = (query) => {
        this.setState({
            query: query
        })
    }

    render() {
        let album = this.state.albums.map((album, index) => {
            let detailsPath = `/browse/details/${album.id}`
            return (
                <div className="col-md-4" key={index}>
                    <Link className="card-title" to={detailsPath}>
                        <img src={album.images[0].url} className="img-fluid xy-shadow m-2" alt={album.name} />
                    </Link>
                </div>
            )
        })
        return (
            <div className="Dashboard">
                <SearchBar onSubmitQuery={this.onSubmitQuery} handleSearchInput={this.handleSearchInput} query={this.state.query} />
                <div className="results-list">
                    <div className="row">
                        {album}
                    </div>
                </div>
            </div>
        );
    }
}

export default Browse
