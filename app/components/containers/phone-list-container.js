/**
 * Created by johib.khan on 02-01-2017.
 */

import React from 'react';
import { connect } from 'react-redux';
import PhoneList from '../views/phone-list';
import * as phoneApi from '../../api/phone-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';


const PhoneListContainer = React.createClass({

  componentDidMount: function() {
    phoneApi.getPhones();
    store.dispatch(loadSearchLayout('phones', 'Phone Results'));
  },

  render: function() {
    return (
      <PhoneList phones={this.props.phones}  />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    phones: store.phoneState.phones
  };
};

export default connect(mapStateToProps)(PhoneListContainer);

