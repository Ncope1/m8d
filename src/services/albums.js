import axios from 'axios'

const CLIENT_URL = 'http://localhost:3001/albums'
// const CLIENT_URL = 'https://project-3-server-final.herokuapp.com/reviews'


// SPOTIFY END POINTS
export const getNewReleases = () => {
    return axios.get(`${CLIENT_URL}/new-releases`)
}

// get album by title from spotify
export const getAlbumByTitle = (title) => {
    return axios.get(`${CLIENT_URL}/search/` + title)
}

// get single album by id
export const getAlbumById = (id) => {
    return axios.get(`${CLIENT_URL}/details/` + id)
}
