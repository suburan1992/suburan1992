import axios from 'axios'
import {ONBOARD_FORM_ADD_FAIL,ONBOARD_FORM_ADD_REQUEST,ONBOARD_FORM_ADD_SUCCESS  } from '../constants/onboardFormConstants'

// create user
export const addOnboard = (email,name,date,mobile) => async (dispatch, getState) => {
    try {
        dispatch({ type: ONBOARD_FORM_ADD_REQUEST })
        const {
            userLogin : {user},
        }= getState()
        const config = {
            headers:{
                Authorization: `Bearer ${user.token}`,
            }
        }
        const { data } = await axios.post('http://localhost:8090/api/onboard/', {
            email:email,
            name:name,
            dob:date,
            mobile:mobile,
            gender: "male",
            users_role_id: 4,
            password : "1234",
            status: 2
        }, config)
        dispatch({
            type: ONBOARD_FORM_ADD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ONBOARD_FORM_ADD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}