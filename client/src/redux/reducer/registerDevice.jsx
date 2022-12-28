import {
  REGISTER_DEVICE_REQUEST,
  REGISTER_DEVICE_SUCCESS,
  REGISTER_DEVICE_FAIL,
  CLEAR_ERRORS,
  REGISTER_DEVICE_RESET,
} from "../type/registerDevice";

export const registerDeviceReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_DEVICE_REQUEST:
      return {
        loading: true,
      };
    case REGISTER_DEVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
      };
    case REGISTER_DEVICE_FAIL:
      return {
        loading: false,
        success: action.payload.success,
        error: action.payload,
      };
    case REGISTER_DEVICE_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
