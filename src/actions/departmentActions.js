import axios from 'axios'
import { DEPARTMENT_LIST_FAIL,DEPARTMENT_LIST_REQUEST,DEPARTMENT_LIST_SUCCESS } from '../constants/departmentConstants'


export const departmentlist = () => async (dispatch) => {
    try {
        dispatch({ type: DEPARTMENT_LIST_REQUEST })
        const { data } = await axios.get('http://localhost:8090/api/departments/')
        dispatch({
            type: DEPARTMENT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DEPARTMENT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}