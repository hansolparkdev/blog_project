import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import Thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
// import loggerMiddleware from './lib/loggerMiddleware';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(Thunk));

export default store;
