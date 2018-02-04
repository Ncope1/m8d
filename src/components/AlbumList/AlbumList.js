// library imports
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// component imports
import { SearchBar } from '../'

// service imports
import { getAlbumByTitle, getNewReleases } from '../../services/albums'

class AlbumList extends Component {
    state = {
        query: '',
        albums: []
    }

    // on mount populate list
    componentWillMount() {
        getNewReleases()
            .then((response) => {
                this.setState({
                    albums: response.data.albums.items,
                })
            })
    }

    // handle query submit from child component
    onSubmitQuery = () => {
        getAlbumByTitle(this.state.query)
            .then((response) => {
                this.setState({
                    albums: response.data,
                })
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
            let detailsPath = `/m8d/albums/${album.id}`
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
        )
    }
}

export default AlbumList
