import axios from 'axios'
import { POSITION_CREATE_FAIL, POSITION_CREATE_REQUEST, POSITION_CREATE_SUCCESS ,POSITION_ADD_REQUEST,POSITION_ADD_SUCCESS,POSITION_ADD_FAIL,FORM_FAIL,FORM_REQUEST,FORM_SUCCESS} from '../constants/createPositionConstants'

// create positions
export const createPositions = (postdata) => async (dispatch, getState) => {
    try {
        dispatch({ type: POSITION_CREATE_REQUEST })
        const {
            userLogin : {user},
        }= getState()
        const config = {
            headers:{
                Authorization: `Bearer ${user.token}`,
            }
        }
        const { data } = await axios.post('http://localhost:8090/api/vacancies/ ',
                             {
                            id:user.user.id,
                            label:user.user.username,       
                            code:user.user.roles,
                            designation:postdata.designationlist,
                            category:postdata.typelist,
                            department:postdata.departmentlist,
                            description:postdata.descriptionInfo,
                            center:postdata.centerlist,
                            status:1,
                             }, config)
        dispatch({
            type: POSITION_CREATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: POSITION_CREATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

// get form
export const formlist = () => async (dispatch) => {
    try {
        dispatch({ type: FORM_REQUEST })
        const { data } = await axios.get('http://localhost:8090/api/onboard/form/')
        dispatch({
            type: FORM_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FORM_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

// ADD POSITION TO TABLE
export const addpositions = () => async (dispatch) => {
    try {
        dispatch({ type: POSITION_ADD_REQUEST })
        const { data } = await axios.get('http://localhost:8090/api/vacancies/')
        dispatch({
            type: POSITION_ADD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: POSITION_ADD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}