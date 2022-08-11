import axios from 'axios';
import * as api from '../api'

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({
            type: 'FETCH_ALL',
            payload: data
        })
    } catch (error) {
        console.log(error.message);
    }
    
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post)
        dispatch({
            type: "CREATE",
            payload: data
        })
    } catch (error) {
        console.log(error.message);
    }
}
export const deletePost = (id) => async (dispatch) => {
    const {data} = await api.deletePost(id)
    console.log(data)
    try {
        dispatch({
            type: 'DELETE',
            payload: data._id
        })
    } catch (error) {
        console.log(error)
    }


}
export const updatePost = (id, post) => async (dispatch) =>{
    const {data : updatedData} = await api.updatePost(id,post)
    console.log(updatedData)
    try {
        dispatch({
            type: 'UPDATE',
            payload: updatedData
        })
    } catch (error) {
        console.log(error)
    }
}

export const like = (id) => async(dispatch) => {

    const {data : updatedLikeData} = await api.like(id) 
    try {
        dispatch({
            type: 'LIKE',
            payload: updatedLikeData
        })
    } catch (error) {
        console.log(error)
    }
}
////////////////////////////////////////////////////////for id////////////////

export const setPostId = (id) => {
    try {
        return({
            type: "SET",
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}


