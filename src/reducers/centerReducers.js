import {CENTER_GET_FAIL,CENTER_GET_REQUEST,CENTER_GET_SUCCESS } from '../constants/centerConstants'

export const centerListReducer = (state = { centers: [] }, action) => {
    switch (action.type) {
        case CENTER_GET_REQUEST:
            return { loading: true}
        case CENTER_GET_SUCCESS:
            return { loading: false, centers: action.payload}
        case CENTER_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}