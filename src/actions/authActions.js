import axios from "axios"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/authConstants"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('http://localhost:8090/api/auth/signin', { email, password }, config)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('user', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const logout = () =>(dispatch) => {
    localStorage.removeItem('user')
    dispatch({type: USER_LOGOUT})

}

// export const login = (email, password) => {
//     return (dispatch) => {
//    axios
//    .post('localhost:8080/api/auth/signin', email,password)
//     .then ((token) => {
//         localStorage.setItem("token",token.data);
//         dispatch({
//             type:USER_LOGIN_SUCCESS,
//             token:token.data,
//         })
//     })
//     . catch ((error) => {
//         dispatch({
//             type: USER_LOGIN_FAIL,
//             payload: error.response && error.response.data.message ? error.response.data.message : error.message,
//         })
//     }
//     )}}