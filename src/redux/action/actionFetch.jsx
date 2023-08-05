import * as type from "./actionType";
import axios from "axios";

export const fetchingData = () => {
  return {
    type: type.FETCH_START,
    payload: true,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: type.FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchDataError = (data) => {
  return {
    type: type.FETCH_ERROR,
    payload: data,
  };
};

export const clickedIdData = (data) => {
  return {
    type: type.CLICLED_ID_CONTENT,
    payload: data,
  };
};

export const findData = () => {
  return async function (dispatch) {
    dispatch(fetchingData);
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log("data", data);
      if (!data) {
        throw new Error("Data Not found");
      }
      dispatch(fetchDataSuccess(data));
    } catch (err) {
      alert("error", err);
      console.log("error", err);
      dispatch(fetchDataError(err));
    }
  };
};
