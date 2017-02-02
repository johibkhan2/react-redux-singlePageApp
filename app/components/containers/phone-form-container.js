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
    console.log("phone added successfully");
  },

  render: function() {
    return (
      <PhoneForm handleSubmit={this.handleSubmit} id="phoneForm" message={this.props.message}/>
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
