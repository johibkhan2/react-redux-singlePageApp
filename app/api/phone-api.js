/**
 * Created by johib.khan on 02-01-2017.
 */
import axios from 'axios';
import store from '../store';
import { getPhonesSuccess,addPhonesSuccess,addPhonesFailure} from '../actions/phone-actions';
import $ from 'jquery';





/**
 * Get all phones
 */

export function getPhones() {
  return axios.get('http://localhost:3001/phones')
    .then(response => {
      store.dispatch(getPhonesSuccess(response.data));
      return response;
    });
}

export function addPhone(phone) {
//created spring rest service to make a post call
  var form_data = new FormData(phone);
  return axios.post('http://localhost:8080/addPhone',form_data)
    .then(response => {
      store.dispatch(addPhonesSuccess('successfully added'));
      return response;
    })
    .catch(function (error) {
 /*      // console.log(error);
      store.dispatch(addPhonesFailure('some issue occurred'));*/
        if (error.response) {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            store.dispatch(addPhonesFailure(error.response.data));
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            store.dispatch(addPhonesFailure(error.message));
        }
        console.log(error.config);
      return error;
    });

}
