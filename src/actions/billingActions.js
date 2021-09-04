import axios from "axios";
import {
  BILLING_FAIL,
  BILLING_REQUEST,
  BILLING_SUCCESS,
} from "../constants/billingConstants";

export const billinglist = () => async (dispatch) => {
  try {
    dispatch({ type: BILLING_REQUEST });
    const { data } = await axios.get("http://localhost:8090/api/topbillings/");
    dispatch({
      type: BILLING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BILLING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
