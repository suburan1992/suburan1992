import axios from 'axios'
import{IP_GET_FAIL,IP_GET_REQUEST,IP_GET_SUCCESS} from '../constants/ipConstants'

export const IPGet = () => async (dispatch) => {
    try {
        dispatch({ type: IP_GET_REQUEST })
        const { data } = await axios.get('http://localhost:8090/api/ipparameters/')
        dispatch({
            type: IP_GET_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: IP_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}