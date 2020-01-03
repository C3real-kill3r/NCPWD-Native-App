import {combineReducers} from 'redux';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  isSuccess: false,
  errors: null,
  token: null,
};

const createUser = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER_LOADING':
      return {
        isLoading: true,
      };

    case 'CREAT_USER_SUCCESS':
      return {
        isLoading: false,
        isSuccess: true,
        isLoggedIn: true,
      };

    case 'CREAT_USER_FAIL':
      return {
        isLoading: false,
        isError: true,
        errors: action.payload,
      };

    default:
      return state;
  }
};

const loginUser = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_LOADING':
      return {
        isLoading: true,
      };
    case 'LOGIN_USER_SUCCESS':
      return {
        isLoading: false,
        isLoggedIn: true,
        isSuccess: true,
      };
    case 'LOGIN_USER_FAIL':
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
  createUser,
  loginUser,
});
