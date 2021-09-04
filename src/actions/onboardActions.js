import axios from "axios";
import {
  ONBOARDING_FAIL,
  ONBOARDING_REQUEST,
  ONBOARDING_SUCCESS,
  ONBOARDING_ADD_REQUEST,
  ONBOARDING_ADD_SUCCESS,
  ONBOARDING_ADD_FAIL,
  ONBOARD_ID_REQUEST,
  ONBOARD_ID_SUCCESS,
  ONBOARD_ID_FAIL,
  ONBOARDING_GET_REQUEST,
  ONBOARDING_GET_SUCCESS,
  ONBOARDING_GET_FAIL,
} from "../constants/onboardConstants";

// create ONBOARDINGs
export const createOnboarding = (postdata) => async (dispatch, getState) => {
  try {
    dispatch({ type: ONBOARDING_REQUEST });
    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const { data } = await axios.post(
      "http://localhost:8090/api/onboard ",
      postdata,
      config
    );
    dispatch({
      type: ONBOARDING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ONBOARDING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// // get form
// export const formlist = () => async (dispatch) => {
//     try {
//         dispatch({ type: FORM_REQUEST })
//         const { data } = await axios.get('http://localhost:8090/api/onboard')
//         dispatch({
//             type: FORM_SUCCESS,
//             payload: data
//         })
//     } catch (error) {
//         dispatch({
//             type: FORM_FAIL,
//             payload: error.response && error.response.data.message ? error.response.data.message : error.message,
//         })
//     }
// }

// ADD ONBOARDING TO TABLE
export const addonboard = () => async (dispatch) => {
  try {
    dispatch({ type: ONBOARDING_GET_REQUEST });
    const { data } = await axios.get("http://localhost:8090/api/onboard");
    dispatch({
      type: ONBOARDING_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ONBOARDING_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// by id
export const onboardById = (id) => async (dispatch) => {
  try {
    dispatch({ type: ONBOARD_ID_REQUEST });
    const { data } = await axios.get(`http://localhost:8090/api/onboard/${id}`);
    dispatch({
      type: ONBOARD_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ONBOARD_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
