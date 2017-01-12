import React from 'react';
import  PhoneForm from '../views/phone-form';
import * as phoneApi from '../../api/phone-api';
import { connect } from 'react-redux';
import store from '../../store';

const PhoneFormContainer= React.createClass({

  handleSubmit : function(event){
    event.preventDefault();
    var myForm = document.getElementById('phoneForm');
    phoneApi.addPhone(myForm);
    console.log("login succesfull");
  },

  render: function() {
    return (
      <PhoneForm onSubmit={this.handleSubmit} id="phoneForm"/>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    message: store.phoneState.message
  };
};

export default connect(mapStateToProps)(PhoneFormContainer);


//export default PhoneFormContainer
