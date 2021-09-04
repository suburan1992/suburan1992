import {POSITION_CREATE_REQUEST,POSITION_CREATE_SUCCESS,POSITION_CREATE_FAIL,POSITION_ADD_REQUEST,POSITION_ADD_SUCCESS,POSITION_ADD_FAIL, FORM_REQUEST, FORM_SUCCESS, FORM_FAIL, POSITION_REMOVE_SUCCESS, POSITION_ID_CREATE_REQUEST, POSITION_ID_CREATE_SUCCESS, POSITION_ID_CREATE_FAIL} from '../constants/createPositionConstants'

// create POSITION
export const PositionCreateReducer = (state = { }, action) => {
    switch (action.type) {
        case POSITION_CREATE_REQUEST:
            return { loading: true, createposition: [] }
        case POSITION_CREATE_SUCCESS:
            return { loading: false, createposition: action.payload }
        case POSITION_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}

// form
export const FormReducer = (state = { form:[]}, action) => {
    switch (action.type) {
        case FORM_REQUEST:
            return { loading: true, form: [] }
        case FORM_SUCCESS:
            return { loading: false, success:true ,form: action.payload }
        case FORM_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}

export const addPositionReducer = (state = { addpos:[]}, action) => {
    switch (action.type) {
        case POSITION_ADD_REQUEST:
            return { loading: true, addpos: [] }
        case POSITION_ADD_SUCCESS:
            return { loading: false, success:true ,addpos: action.payload }
        case POSITION_ADD_FAIL:
            return { loading: false, error: action.payload }
            case POSITION_REMOVE_SUCCESS:
                return { }
            
        default:
            return state

    }
}

export const findbyIdPositionReducer = (state = { findpos:[]}, action) => {
    switch (action.type) {
        case POSITION_ID_CREATE_REQUEST:
            return { loading: true, findpos: [] }
        case POSITION_ID_CREATE_SUCCESS:
            return { loading: false, success:true ,findpos: action.payload }
        case POSITION_ID_CREATE_FAIL:
            return { loading: false, error: action.payload }
            
        default:
            return state

    }
}