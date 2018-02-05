// library imports
import React, { Component } from 'react'

// service imports
import { getAlbumById } from '../../services/albums'

class AlbumDetails extends Component {

    state = {
        apiResponse: {},
        album: '',
        artist: '',
        image: '',
        trackList: []
    }

    componentWillMount() {
        getAlbumById(this.props.match.params.id)
            .then((response) => {
                this.setState({
                    album: response.data.name,
                    artist: response.data.artists[0].name,
                    image: response.data.images[0].url,
                    trackList: response.data.tracks.items
                })
            })
            .catch(err => console.log(err))
    }

    render() {

        let track = this.state.trackList.map((track, index) => {
            return (
                <div key={index} className="list-group-item">
                    <h5>{track.track_number}. {track.name}</h5>
                    <div className="audio">
                        <audio controls>
                            <source src={track.preview_url} type="audio/mpeg" />
                            Your browser does not support the audio tag.
                        </audio>
                    </div>
                </div>
            )
        })
        
        return (
            <div className="AlbumDetails">
                <div className="container">
                    <h1>{this.state.album}</h1>
                    <h4>{this.state.artist}</h4>
                    <hr />
                    <div className="row">
                        <div className="col-md-5 my-1">
                            <img src={this.state.image} className="img-fluid xy-shadow" alt={this.state.album} />
                        </div>
                        <div className="col-md-7 my-1">
                            <div className="list-group track-list">
                                {track}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumDetails
