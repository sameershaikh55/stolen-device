import {
  REPORT_DEVICE_REQUEST,
  REPORT_DEVICE_SUCCESS,
  REPORT_DEVICE_FAIL,
  ALL_REPORTED_DEVICES_FAIL,
  ALL_REPORTED_DEVICES_REQUEST,
  ALL_REPORTED_DEVICES_SUCCESS,
  CLEAR_ERRORS,
  REPORTED_DEVICE_DETAILS_REQUEST,
  REPORTED_DEVICE_DETAILS_SUCCESS,
  REPORTED_DEVICE_DETAILS_FAIL,
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

// All Reported Devices
export const allReportedDevices = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: ALL_REPORTED_DEVICES_REQUEST });

    const {
      data: {
        reportedDevices: { devices, pictureUrl },
      },
    } = await axios.get(`/api/device/search/results`);

    for (let i = 0; i < devices.length; i++) {
      devices[i] = {
        ...devices[i],
        deviceImage: (
          <img
            width="80"
            height="80"
            src={pictureUrl + devices[i].deviceImage}
            alt=""
          />
        ),
        stolenDate: new Date(devices[i].stolenDate).toDateString(),
      };
    }

    dispatch({
      type: ALL_REPORTED_DEVICES_SUCCESS,
      payload: devices,
    });
  } catch (error) {
    dispatch({
      type: ALL_REPORTED_DEVICES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Device Detail
export const reportedDeviceDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: REPORTED_DEVICE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/device/reported/${id}`);

    dispatch({
      type: REPORTED_DEVICE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REPORTED_DEVICE_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
