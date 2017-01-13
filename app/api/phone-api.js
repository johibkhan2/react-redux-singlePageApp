/**
 * Created by johib.khan on 02-01-2017.
 */
import axios from 'axios';
import store from '../store';
import { getPhonesSuccess,addPhonesSuccess} from '../actions/phone-actions';
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
      store.dispatch(addPhonesSuccess(response));
      return response;
    })
    .catch(function (error) {
      store.dispatch(addPhonesFailure(error));
      console.log(error);
      return error;
    });
    ;

}
