import{IP_GET_FAIL,IP_GET_REQUEST,IP_GET_SUCCESS} from '../constants/ipConstants'

export const ipGetReducer = (state = { form:[]}, action) => {
    switch (action.type) {
        case IP_GET_REQUEST:
            return { loading: true, ipform: [] }
        case IP_GET_SUCCESS:
            return { loading: false, success:true ,ipform: action.payload }
        case IP_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}