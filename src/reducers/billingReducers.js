import {BILLING_SUCCESS,BILLING_REQUEST,BILLING_FAIL} from '../constants/billingConstants'

export const billinglistReducer = (state = { bills: [] }, action) => {
    switch (action.type) {
        case BILLING_REQUEST:
            return { loading: true}
        case BILLING_SUCCESS:
            return { loading: false, bills: action.payload}
        case BILLING_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}