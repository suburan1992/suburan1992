import axios from "axios";
import {
DOCTOR_TOP_FAIL,
DOCTOR_TOP_REQUEST,DOCTOR_TOP_SUCCESS
} from "../constants/topdoctorConstants";

export const doctortoplist = () => async (dispatch) => {
  try {
    dispatch({ type: DOCTOR_TOP_REQUEST });
    const { data } = await axios.get("http://localhost:8090/api/topdoctors/");
    dispatch({
      type: DOCTOR_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOCTOR_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
