import {
  REPORT_DEVICE_REQUEST,
  REPORT_DEVICE_SUCCESS,
  REPORT_DEVICE_FAIL,
  CLEAR_ERRORS,
  REPORT_DEVICE_RESET,
  ALL_REPORTED_DEVICES_FAIL,
  ALL_REPORTED_DEVICES_SUCCESS,
  ALL_REPORTED_DEVICES_REQUEST,
  REPORTED_DEVICE_DETAILS_REQUEST,
  REPORTED_DEVICE_DETAILS_SUCCESS,
  REPORTED_DEVICE_DETAILS_FAIL,
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

export const allReportedDevicesReducer = (
  state = { reportedDevices: [] },
  action
) => {
  switch (action.type) {
    case ALL_REPORTED_DEVICES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_REPORTED_DEVICES_SUCCESS:
      return {
        ...state,
        loading: false,
        reportedDevices: action.payload,
      };
    case ALL_REPORTED_DEVICES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
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

// Device Detail
export const reportedDeviceReducer = (
  state = { reportedDevice: {} },
  action
) => {
  switch (action.type) {
    case REPORTED_DEVICE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REPORTED_DEVICE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        reportedDevice: action.payload.reportedDevice.device,
        pictureUrl: action.payload.reportedDevice.pictureUrl,
      };
    case REPORTED_DEVICE_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
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
