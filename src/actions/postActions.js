import {
    ADD_CURHAT,
    FETCH_DATA_POST,
    FETCH_DATA_POST_USER_BY_ID,
    FETCH_POST_BY_POST_ID,
    DELETE_POST_BY_ID,
    UPDATE_POST_BY_ID,
    SEARCH_DATA
} from "./types"
import axios from "axios";



export const createCurhat = data => dispatch => {
    axios.post("https://curhatin.herokuapp.com/post", {
            tagId: data.tagId,
            post: data.post,
            topic: data.topic
        }, {
            headers: {
                authorization: `Bearer ${data.token}`
            }
        })
        .then(res => {
            console.log(res)
            dispatch({
                type: ADD_CURHAT,
                payload: data
            })
        })
        .catch(err => console.log(err))
}


export const fetchDataPost = token => (dispatch) => {
    axios.get('https://curhatin.herokuapp.com/post', {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            if (Array.isArray(res.data)) {
                dispatch({
                    type: FETCH_DATA_POST,
                    payload: res.data
                })
            }
        })
        .catch(err => console.log(err))

}

export const fetchDataPostById = (token) => (dispatch) => {
    axios.get(`https://curhatin.herokuapp.com/post/account-id`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res.data)
            dispatch({
                type: FETCH_DATA_POST_USER_BY_ID,
                payload: res.data
            })
        })
        .catch(err => console.log(err))

}

export const fetchDataPostUserById = (token, id) => (dispatch) => {
    axios.get(`https://curhatin.herokuapp.com/post/${id}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res.data)
            dispatch({
                type: FETCH_POST_BY_POST_ID,
                payload: res.data
            })
        })
        .catch(err => console.log(err))

}


export const DeleteDataPostUserById = (token, id) => (dispatch) => {
    axios.delete(`https://curhatin.herokuapp.com/post/${id}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res.data)
            dispatch({
                type: DELETE_POST_BY_ID,
                payload: res.data
            })
        })
        .catch(err => console.log(err))

}

export const updatePostById = data => dispatch => {
    axios.put(`https://curhatin.herokuapp.com/post/${data.id}`, {
            tagId: data.tagId,
            post: data.post,
            topic: data.topic
        }, {
            headers: {
                authorization: `Bearer ${data.token}`
            }
        })
        .then(res => {
            console.log(res)
            dispatch({
                type: UPDATE_POST_BY_ID,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const searchDataPost = data => dispatch => {
    axios.get(`https://curhatin.herokuapp.com/post/search?post=${data.message}`,{
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
    .then(res => {
        dispatch({
            type: SEARCH_DATA,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
}
