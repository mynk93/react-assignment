import { combineReducers } from 'redux';
import oratio from './oratio';
import auth from './auth';

export default combineReducers({
  oratio,
  auth,
});
