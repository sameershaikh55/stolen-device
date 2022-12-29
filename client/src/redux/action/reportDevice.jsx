import {
  REPORT_DEVICE_REQUEST,
  REPORT_DEVICE_SUCCESS,
  REPORT_DEVICE_FAIL,
  CLEAR_ERRORS,
} from "../type/reportDevice";
import axios from "axios";

// Register Device
export const reportDevice = (deviceData) => async (dispatch) => {
  try {
    dispatch({ type: REPORT_DEVICE_REQUEST });

    const { data } = await axios.post(`/api/device/report`, deviceData);

    dispatch({
      type: REPORT_DEVICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REPORT_DEVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
