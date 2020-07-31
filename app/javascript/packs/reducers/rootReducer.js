import { combineReducers } from 'redux';
import destinationsReducer from './DestinationsReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  user: userReducer,
  destinations: destinationsReducer,
});

export default rootReducer;
