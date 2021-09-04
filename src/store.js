import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { doctorListReducer } from "./reducers/doctorsReducer";
import { userLoginReducer } from "./reducers/authReducers";
import { userCreateReducer, userListReducer } from "./reducers/userReducers";
import {
  PositionCreateReducer,
  FormReducer,
  addPositionReducer,
  findbyIdPositionReducer,
} from "./reducers/createPositionReducers";
import { departmentListReducer } from "./reducers/departmentReducers";
import {
  uploadDocumentReducer,
  listDocumentReducer,
} from "./reducers/documentReducers";
import { centerListReducer } from "./reducers/centerReducers";
import { opGetReducer } from "./reducers/opReducers";
import { ipGetReducer } from "./reducers/ipReducers";
import { commercialListReducer } from "./reducers/commercialReducers";
// import {onboardFormReducer,onboardbyIdReducer} from './reducers/onboardReducers'
import {
  onboardFormReducer,
  onboardbyIdReducer,
  GetonboardReducer,
} from "./reducers/onboardReducers";
import { billinglistReducer } from "./reducers/billingReducers";
import { topDoctorListReducer } from "./reducers/topdoctorReducers";

const reducer = combineReducers({
  doctorList: doctorListReducer,
  userLogin: userLoginReducer,
  userCreate: userCreateReducer,
  userList: userListReducer,
  positioncreate: PositionCreateReducer,
  departmentList: departmentListReducer,
  formList: FormReducer,
  addPosition: addPositionReducer,
  uploadDoc: uploadDocumentReducer,
  GetOp: opGetReducer,
  GetIp: ipGetReducer,
  onboardform: onboardFormReducer,
  onboardId: onboardbyIdReducer,
  findPos: findbyIdPositionReducer,
  listDoc: listDocumentReducer,
  getOnboard: GetonboardReducer,
  centerList: centerListReducer,
  commercialsList: commercialListReducer,
  billsList: billinglistReducer,
  topdocList:topDoctorListReducer,
});

// checking to see if users info is in storage else return null
const userInfoFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initalState = {
  userLogin: { user: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
