import { DOCUMENT_UPLOAD_SUCCESS,DOCUMENT_UPLOAD_REQUEST,DOCUMENT_UPLOAD_FAIL, DOCUMENT_LIST_REQUEST, DOCUMENT_LIST_SUCCESS, DOCUMENT_LIST_FAIL} from "../constants/documentConstants"

export const uploadDocumentReducer = (state = {}, action) => {
    switch (action.type) {
        case DOCUMENT_UPLOAD_REQUEST:
            return { loading: true }
        case DOCUMENT_UPLOAD_SUCCESS:
            return { 
                loading: false, upload: action.payload
             }
        case DOCUMENT_UPLOAD_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state

    }
}


export const listDocumentReducer = (state = {list:[]}, action) => {
    switch (action.type) {
        case DOCUMENT_LIST_REQUEST:
            return { loading: true, list: [] }
        case DOCUMENT_LIST_SUCCESS:
            return { 
                loading: false, list: action.payload
             }
        case DOCUMENT_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state

    }
}