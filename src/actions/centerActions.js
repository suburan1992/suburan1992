import axios from 'axios'
import {CENTER_GET_FAIL,CENTER_GET_REQUEST,CENTER_GET_SUCCESS } from '../constants/centerConstants'

export const centerlist = () => async (dispatch) => {
    try {
        dispatch({ type: CENTER_GET_REQUEST })
        const { data } = await axios.get('http://localhost:8090/api/centers/')
        dispatch({
            type: CENTER_GET_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CENTER_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}