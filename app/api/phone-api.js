/**
 * Created by johib.khan on 02-01-2017.
 */
import axios from 'axios';
import store from '../store';
import { getPhonesSuccess,addPhonesSuccess,addPhonesFailure,phoneProfileSuccess,getMorePhonesSuccess} from '../actions/phone-actions';


export function getMorePhones(loadRange) {
//  return axios.get('http://localhost:3003/phones')
//    .then(response => {
//      store.dispatch(getMorePhonesSuccess(response.data));
//      return response;
//    });
    const range=100;
    let phones=new Array();
    for(var i=loadRange+1; i<loadRange+range; i++){
    let phone={age:i,carrier:'This is a on scroll load test'+i,id:'test-This-is-a-on-scroll-load-test'+i,imageUrl:'/img/phones/samsung-gem.0.jpg',name:'This is a on scroll load test'+i,snippet:''};
    phones.push(phone);
    }
      store.dispatch(getMorePhonesSuccess(phones,loadRange+range));
      return phones;
}
    
    



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





export function searchPhones(query = '') {
  return axios.get('http://localhost:3001/phones?q='+ query)
    .then(response => {
      store.dispatch(getPhonesSuccess(response.data));
      return response;
    });
}

export function getPhoneProfile(phoneId) {

  // Get the user data from our local database.
  return axios.get('http://localhost:3001/phones/' + phoneId)
    .then(response => {
    store.dispatch(phoneProfileSuccess(response.data));
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
