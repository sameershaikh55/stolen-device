import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// REDUCERS
import {
  forgotPasswordReducer,
  userDevicesReducer,
  userReducer,
} from "./reducer/auth";
import { registerDeviceReducer } from "./reducer/registerDevice.jsx";
import { reportDeviceReducer } from "./reducer/reportDevice";

const reducer = combineReducers({
  user: userReducer,
  forgetPassword: forgotPasswordReducer,
  userDevices: userDevicesReducer,
  registerDevice: registerDeviceReducer,
  reportDevice: reportDeviceReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
