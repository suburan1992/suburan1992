
import { DEPARTMENT_LIST_FAIL,DEPARTMENT_LIST_REQUEST,DEPARTMENT_LIST_SUCCESS } from '../constants/departmentConstants'



// department list
export const departmentListReducer = (state = { departments: [] }, action) => {
    switch (action.type) {
        case DEPARTMENT_LIST_REQUEST:
            return { loading: true}
        case DEPARTMENT_LIST_SUCCESS:
            return { loading: false, departments: action.payload}
        case DEPARTMENT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}