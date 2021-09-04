import axios from 'axios'
import { USER_CREATE_FAIL, USER_CREATE_REQUEST, USER_CREATE_SUCCESS, USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS } from '../constants/userConstants'

// create user
export const createUsers = () => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_CREATE_REQUEST })
        const {
            userLogin : {userInfo},
        }= getState()
        const config = {
            headers:{
                Authorization: `Bearer ${userInfo.token}`,
            }
        }
        const { data } = await axios.post('/users/add', {}, config)
        dispatch({
            type: USER_CREATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_CREATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

// user list
export const listusers = (id) => async (dispatch,getState) => {
    try {
        dispatch({ type: USER_LIST_REQUEST })
        const {
            userLogin : {user},
        }= getState()

        // const { data } = await axios.get('http://localhost:8090/api/users/2' )
        const { data } = await axios.get(`http://localhost:8090/api/users/${user.user.id}` )
        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}