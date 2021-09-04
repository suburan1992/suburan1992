import{OP_GET_FAIL,OP_GET_REQUEST,OP_GET_SUCCESS} from '../constants/opConstants'

export const opGetReducer = (state = { form:[]}, action) => {
    switch (action.type) {
        case OP_GET_REQUEST:
            return { loading: true, opform: [] }
        case OP_GET_SUCCESS:
            return { loading: false, success:true ,opform: action.payload }
        case OP_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}