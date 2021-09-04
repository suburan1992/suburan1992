import axios from "axios";
import {
  POSITION_CREATE_FAIL,
  POSITION_CREATE_REQUEST,
  POSITION_REMOVE_SUCCESS,
  POSITION_CREATE_SUCCESS,
  POSITION_ADD_REQUEST,
  POSITION_ADD_SUCCESS,
  POSITION_ADD_FAIL,
  FORM_FAIL,
  FORM_REQUEST,
  FORM_SUCCESS,
  POSITION_ID_CREATE_REQUEST,
  POSITION_ID_CREATE_SUCCESS,
  POSITION_ID_CREATE_FAIL,
} from "../constants/createPositionConstants";

// create positions
export const createPositions = (postdata) => async (dispatch, getState) => {
  try {
    dispatch({ type: POSITION_CREATE_REQUEST });
    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const { data } = await axios.post(
      "http://localhost:8090/api/vacancies/ ",
      {
        id: user.user.id,
        label: user.user.username,
        code: user.user.roles,
        designationLabel: postdata.designationlist,
        category: postdata.typelist,
        departmentLabel: postdata.departmentlist,
        description: postdata.descriptionInfo,
        centerNames: postdata.centerlist,
        status: 1,
      },
      config
    );
    dispatch({
      type: POSITION_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POSITION_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// get form
export const formlist = () => async (dispatch) => {
  try {
    dispatch({ type: FORM_REQUEST });
    const { data } = await axios.get(
      "http://localhost:8090/api/vacancies/form/"
    );
    dispatch({
      type: FORM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FORM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ADD POSITION TO TABLE
export const addpositions = () => async (dispatch) => {
  try {
    dispatch({ type: POSITION_ADD_REQUEST });
    const { data } = await axios.get("http://localhost:8090/api/vacancies/");
    dispatch({
      type: POSITION_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POSITION_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeRequest = (id) => async (dispatch) => {
  dispatch({
    type: POSITION_REMOVE_SUCCESS,
    payload: id,
  });
};

// ADD SINGLE POSITION TO MODAL
export const findpositions = (id) => async (dispatch) => {
  try {
    dispatch({ type: POSITION_ID_CREATE_REQUEST });
    const { data } = await axios.get(
      `http://localhost:8090/api/vacancies/${id}`
    );
    dispatch({
      type: POSITION_ID_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POSITION_ID_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
