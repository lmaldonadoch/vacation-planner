import { combineReducers } from 'redux';
import destinationsReducer from './DestinationsReducer';
import userReducer from './UserReducer';
import dateReducer from './DateReducer';

const rootReducer = combineReducers({
  user: userReducer,
  destinations: destinationsReducer,
  dates: dateReducer,
});

export default rootReducer;
