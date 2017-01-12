import { combineReducers } from 'redux';

// Reducers
import searchLayoutReducer from './search-layout-reducer';
import phoneReducer from './phone-reducer'

// Combine Reducers
var reducers = combineReducers({
    searchLayoutState: searchLayoutReducer,
    phoneState : phoneReducer
});

export default reducers;
