import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todos from './todos';
import post from './post';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos,
  post,
});

export default rootReducer;
