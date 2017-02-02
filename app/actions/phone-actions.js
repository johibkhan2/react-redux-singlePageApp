/**
 * Created by johib.khan on 02-01-2017.
 */
import * as types from '../actions/action-types';

export function getPhonesSuccess(phones) {
  return {
    type: types.GET_PHONES_SUCCESS,
    phones
  };
}

export function addPhonesSuccess(message) {
  return {
    type: types.ADD_PHONE_SUCCESS,
    message
  };
}

export function addPhonesFailure(message) {
  return {
    type: types.ADD_PHONE_FAILURE,
      message
  };
}

export function phoneProfileSuccess(phoneProfile) {
  return {
    type: types.PHONE_PROFILE_SUCCESS,
      phoneProfile
  };
}