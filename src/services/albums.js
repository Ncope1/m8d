import axios from 'axios'

// const CLIENT_URL = 'http://localhost:3001/albums'
const CLIENT_URL = 'https://project-3-server-final.herokuapp.com/albums'

export const getNewReleases = () => {
    return axios.get(`${CLIENT_URL}/new-releases`)
}

export const getAlbumByTitle = (title) => {
    return axios.get(`${CLIENT_URL}/search/` + title)
}

export const getAlbumById = (id) => {
    return axios.get(`${CLIENT_URL}/details/` + id)
}
