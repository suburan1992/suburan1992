
import {
    DOCTOR_TOP_FAIL,
    DOCTOR_TOP_REQUEST,DOCTOR_TOP_SUCCESS
    } from "../constants/topdoctorConstants";

export const topDoctorListReducer = (state = { topdoc: [] }, action) => {
    switch (action.type) {
        case DOCTOR_TOP_REQUEST:
            return { loading: true, topdoc: [] }
        case DOCTOR_TOP_SUCCESS:
            return { loading: false, topdoc: action.payload }
        case DOCTOR_TOP_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}