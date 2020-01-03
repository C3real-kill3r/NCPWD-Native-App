import {fetchApi} from '../service/api';

export const createNewUser = payload => {
  return async dispatch => {
    try {
      dispatch({
        type: 'CREAT_USER_LOADING',
      });
      const response = await fetchApi('users/', 'POST', payload, 200);
      if (response.success) {
        dispatch({
          type: 'CREAT_USER_SUCCESS',
        });
        return response;
      } else {
        throw response;
      }
    } catch (error) {
      dispatch({
        type: 'CREAT_USER_FAIL',
        payload: error.responseBody,
      });
    }
  };
};

export const loginUser = payload => {
  return async dispatch => {
    try {
      const response = await fetchApi('users/login/', 'POST', payload, 200);
      return response;
    } catch (error) {
      throw error;
    }
  };
};
