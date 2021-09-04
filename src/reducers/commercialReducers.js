import {COMMERCIAL_GET_REQUEST,COMMERCIAL_GET_SUCCESS,COMMERCIAL_GET_FAIL} from '../constants/commercialConstants'

export const commercialListReducer = (state = {  commercial: [] }, action) => {
    switch (action.type) {
        case COMMERCIAL_GET_REQUEST:
            return { loading: true}
        case COMMERCIAL_GET_SUCCESS:
            return { loading: false,  commercial: action.payload}
        case COMMERCIAL_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}