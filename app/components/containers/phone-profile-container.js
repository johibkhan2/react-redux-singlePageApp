import React from 'react';
import { connect } from 'react-redux';
import PhoneProfile from '../views/phone-profile';
import * as phoneApi from '../../api/phone-api';

const PhoneProfileContainer = React.createClass({

  componentDidMount: function() {
    let phoneId = this.props.params.phoneId;
    phoneApi.getPhoneProfile(phoneId);
  },

  render: function() {
    return (
      <PhoneProfile {...this.props.profile} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    profile: store.phoneState.phoneProfile
  };
};

export default connect(mapStateToProps)(PhoneProfileContainer);
