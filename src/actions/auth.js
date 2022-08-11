import * as api from '../api/index'

export const signin = (formData, navigate) => async (dispatch) => {
    
    
    try { 
        const {data} = await api.signIn(formData)
        dispatch({
            type: 'AUTH',
            payload: data
        })
        navigate('/')
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: error
        })    
    }

   }
export const signup = (formData, navigate) => async (dispatch) => {
    
    try {
        const {data} = await api.signUp(formData)
        dispatch({
            type : 'AUTH',
            payload: data
        })
        navigate('/')
    } catch (error) { 
        dispatch({
            type: 'ERROR',
            payload: error
        })
    }

   }
export const logout = () => {
    return {
        type : 'LOGOUT'
    }

   }