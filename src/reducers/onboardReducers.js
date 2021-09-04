import {
  ONBOARD_ID_FAIL,
  ONBOARD_ID_REQUEST,
  ONBOARD_ID_SUCCESS,
  ONBOARDING_GET_REQUEST,
  ONBOARDING_GET_SUCCESS,
  ONBOARDING_GET_FAIL,
} from "../constants/onboardConstants";
import {
  ONBOARD_FORM_ADD_FAIL,
  ONBOARD_FORM_ADD_REQUEST,
  ONBOARD_FORM_ADD_SUCCESS,
} from "../constants/onboardFormConstants";

export const onboardFormReducer = (state = {}, action) => {
  switch (action.type) {
    case ONBOARD_FORM_ADD_REQUEST:
      return { loading: true, createonboard: [] };
    case ONBOARD_FORM_ADD_SUCCESS:
      return { loading: false, createonboard: action.payload };
    case ONBOARD_FORM_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const onboardbyIdReducer = (state = { oboard: [] }, action) => {
  switch (action.type) {
    case ONBOARD_ID_REQUEST:
      return { loading: true, oboard: [] };
    case ONBOARD_ID_SUCCESS:
      return { loading: false, success: true, oboard: action.payload };
    case ONBOARD_ID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetonboardReducer = (state = {}, action) => {
  switch (action.type) {
    case ONBOARDING_GET_REQUEST:
      return { loading: true, getonboard: [] };
    case ONBOARDING_GET_SUCCESS:
      return { loading: false, getonboard: action.payload };
    case ONBOARDING_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
