import React from 'react'
import { Link } from 'react-router-dom'

const Results = (props) => {
    let album = props.albums.map((album, index) => {
        let detailsPath = `/m8d/details/${album.id}`
        return (
            <div className="card card-results xy-shadow m-2" key={index}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            <img src={album.images[0].url} className="img-fluid" alt={album.name}/>
                        </div>
                        <div className="col-md-10">
                            <Link className="card-title" to={detailsPath}><h4>{album.name}</h4></Link>
                            {album.artists.map((artist, index) => {
                                return <p className="text-muted" key={index}>{artist.name}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="ResultsList">
            {album}
        </div>
    )

}

export default Results
