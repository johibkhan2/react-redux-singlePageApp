import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  phones: [],
  message:''
};

const phoneReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_PHONES_SUCCESS:
      return Object.assign({}, state, { phones: action.phones });
    case types.ADD_PHONE_SUCCESS:
      return Object.assign({}, state, { message: action.message });
    case types.ADD_PHONE_FAILURE:
      return Object.assign({}, state, { message: action.message });
  }

  return state;

}

export default phoneReducer;
