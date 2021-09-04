import axios from 'axios'
import { DOCTOR_LIST_SUCCESS, DOCTOR_LIST_REQUEST, DOCTOR_LIST_FAIL } from '../constants/doctorConstants'

export const listDoctors = () => async (dispatch) => {
   
    try {
        dispatch({ type: DOCTOR_LIST_REQUEST })
        const { data } = await axios.get('/doctors/list')
        dispatch({
            type: DOCTOR_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DOCTOR_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}