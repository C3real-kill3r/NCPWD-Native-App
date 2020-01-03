import {fetchApi} from '../service/api';

export const createNewUser = payload => {
  return async dispatch => {
    try {
      const response = await fetchApi('users/', 'POST', payload, 200);
      return response;
    } catch (error) {
      throw error;
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
}
