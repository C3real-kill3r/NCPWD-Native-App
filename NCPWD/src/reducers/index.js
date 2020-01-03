import {combineReducers} from 'redux';
import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import {reducer as formReducer} from 'redux-form';

const reducers = {
  authReducer,
  userReducer,
  form: formReducer,
};

export default combineReducers(reducers);
