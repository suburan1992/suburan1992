import axios from "axios"
import {DOCUMENT_LIST_FAIL, DOCUMENT_LIST_REQUEST, DOCUMENT_LIST_SUCCESS, DOCUMENT_UPLOAD_FAIL,DOCUMENT_UPLOAD_REQUEST,DOCUMENT_UPLOAD_SUCCESS} from "../constants/documentConstants"

export const documentUpload = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: DOCUMENT_UPLOAD_REQUEST
        })
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const { data } = await axios.post('http://localhost:8090/api/documents/uploadOne', { 
            formData
         }, config)
        dispatch({
            type: DOCUMENT_UPLOAD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DOCUMENT_UPLOAD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const documentlist = (id) => async (dispatch,getState) => {
    try {
        dispatch({ type: DOCUMENT_LIST_REQUEST })
        // const { data } = await axios.get('http://localhost:8090/api/documents/list/')
        // http://localhost:8090/api/onboard/
        const { data } = await axios.get(`http://localhost:8090/api/documents/list/${id}`)

        dispatch({
            type: DOCUMENT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DOCUMENT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}