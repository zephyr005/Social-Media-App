import * as type from "../action/actionType";

const initialState = {
  loading: false,
  errorMsg: null,
  data: [],
  clickedData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case type.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: null,
        data: action.payload,
        clickedData: [],
      };
    case type.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        errorMsg: action.payload,
        clickedData: [],
      };

    case type.CLICLED_ID_CONTENT:
      return {
        ...state,
        loading: false,
        errorMsg: null,
        clickedData: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
