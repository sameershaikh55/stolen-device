import {
  REGISTER_DEVICE_REQUEST,
  REGISTER_DEVICE_SUCCESS,
  REGISTER_DEVICE_FAIL,
  CLEAR_ERRORS,
  REGISTER_DEVICE_RESET,
  GET_REGISTERED_DEVICE_REQUEST,
  GET_REGISTERED_DEVICE_SUCCESS,
  GET_REGISTERED_DEVICE_FAIL,
} from "../type/registerDevice";

export const registerDeviceReducer = (
  state = {
    device: {},
  },
  action
) => {
  switch (action.type) {
    case REGISTER_DEVICE_REQUEST:
    case GET_REGISTERED_DEVICE_REQUEST:
      return {
        loading: true,
      };
    case REGISTER_DEVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
      };
    case GET_REGISTERED_DEVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        device: action.payload.device,
        pictureUrl: action.payload.pictureUrl,
      };
    case REGISTER_DEVICE_FAIL:
      return {
        loading: false,
        success: action.payload.success,
        error: action.payload,
      };
    case GET_REGISTERED_DEVICE_FAIL:
      return {
        loading: false,
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
