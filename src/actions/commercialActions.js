import axios from 'axios'
import {COMMERCIAL_GET_REQUEST,COMMERCIAL_GET_SUCCESS,COMMERCIAL_GET_FAIL} from '../constants/commercialConstants'

export const commmerciallist = () => async (dispatch) => {
    try {
        dispatch({ type: COMMERCIAL_GET_REQUEST })
        const { data } = await axios.get('http://localhost:8090/api/CommercialCategory/')
        dispatch({
            type: COMMERCIAL_GET_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COMMERCIAL_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}