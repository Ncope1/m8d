import axios from 'axios'

const CLIENT_URL = 'http://localhost:3000/users'
// const CLIENT_URL = 'https://project-3-server-final.herokuapp.com/reviews'



export const loginUser = (username, password) => {
    return axios.get(`${CLIENT_URL}/` + username)
}

export const logoutUser = (user) => {
    return axios.post(`${CLIENT_URL}/`, username)
}