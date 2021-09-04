import axios from 'axios'
import{OP_GET_FAIL,OP_GET_REQUEST,OP_GET_SUCCESS} from '../constants/opConstants'

export const opGet = () => async (dispatch) => {
    try {
        dispatch({ type: OP_GET_REQUEST })
        const { data } = await axios.get('http://localhost:8090/api/opparameters/')
        dispatch({
            type: OP_GET_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: OP_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}