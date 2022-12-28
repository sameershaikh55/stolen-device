import {
  REGISTER_DEVICE_REQUEST,
  REGISTER_DEVICE_SUCCESS,
  REGISTER_DEVICE_FAIL,
  CLEAR_ERRORS,
} from "../type/registerDevice";
import axios from "axios";

// Register Device
export const registerDevice = (deviceData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_DEVICE_REQUEST });

    const { data } = await axios.post(`/api/device/register`, deviceData);

    dispatch({
      type: REGISTER_DEVICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_DEVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
