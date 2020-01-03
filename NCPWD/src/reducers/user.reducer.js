import {combineReducers} from 'redux';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  userDetails: null,
  errors: null,
};

const getUser = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_LOADING':
      return {
        isLoading: true,
      };

    case 'GET_USER_SUCCESS':
      return {
        isLoading: false,
        isSuccess: true,
        userDetails: action.payload,
      };

    case 'GET_USER_FAIL':
      return {
        isLoading: false,
        isError: true,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default combineReducers({
  getUser,
});
