import {
  REPORT_DEVICE_REQUEST,
  REPORT_DEVICE_SUCCESS,
  REPORT_DEVICE_FAIL,
  CLEAR_ERRORS,
  REPORT_DEVICE_RESET,
} from "../type/reportDevice";

export const reportDeviceReducer = (state = {}, action) => {
  switch (action.type) {
    case REPORT_DEVICE_REQUEST:
      return {
        loading: true,
      };
    case REPORT_DEVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
      };
    case REPORT_DEVICE_FAIL:
      return {
        loading: false,
        success: action.payload.success,
        error: action.payload,
      };
    case REPORT_DEVICE_RESET:
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
