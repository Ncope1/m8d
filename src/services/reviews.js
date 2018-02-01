import axios from 'axios'

const CLIENT_URL = 'http://localhost:8080/reviews'


// get all albums
export const getAllReviews = () => {
    return axios.get(`${CLIENT_URL}/`)
}

export const getReviewById = (id) => {
    return axios.get(`${CLIENT_URL}/` + id)
}

export const createReview = (review) => {
    return axios.post(`${CLIENT_URL}/`, review)
}

export const updateReview = (id, update) => {
    return axios.put(`${CLIENT_URL}/` + id, update)
}

export const deleteReviewById = (id) => {
    return axios.delete(`${CLIENT_URL}/` + id)
}
