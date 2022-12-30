import {
  REGISTER_DEVICE_REQUEST,
  REGISTER_DEVICE_SUCCESS,
  REGISTER_DEVICE_FAIL,
  CLEAR_ERRORS,
  GET_REGISTERED_DEVICE_REQUEST,
  GET_REGISTERED_DEVICE_SUCCESS,
  GET_REGISTERED_DEVICE_FAIL,
} from "../type/registerDevice";
import axios from "axios";

// Register Device
export const registerDevice = (deviceData, id) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_DEVICE_REQUEST });

    let data;

    if (id) {
      data = await axios.put(`/api/device/${id}`, deviceData);
    } else {
      data = await axios.post(`/api/device`, deviceData);
    }

    dispatch({
      type: REGISTER_DEVICE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_DEVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Registered Device
export const getRegisteredDevice = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_REGISTERED_DEVICE_REQUEST });

    const { data } = await axios.get(`/api/device/${id}`);

    dispatch({
      type: GET_REGISTERED_DEVICE_SUCCESS,
      payload: data.device,
    });
  } catch (error) {
    dispatch({
      type: GET_REGISTERED_DEVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
