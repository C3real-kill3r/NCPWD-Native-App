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
        isError: false,
        isSuccess: true,
        errors: null,
      };

    case 'CREAT_USER_FAIL':
      return {
        isError: true,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default combineReducers({
  createUser,
});
