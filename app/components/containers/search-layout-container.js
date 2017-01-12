import React from 'react';
import { connect } from 'react-redux';
import SearchLayout from '../layouts/search-layout';

const mapStateToProps = function(store) {

  let searchType = store.searchLayoutState.searchType;
  let totalResults = 0;
  let addPhone= store.searchLayoutState.addPhone;

  if (searchType === 'phones') {
    totalResults = store.phoneState.phones.length;
  }

  return {
    searchType,
    title: store.searchLayoutState.title,
    totalResults,
    addPhone
  };

};

export default connect(mapStateToProps)(SearchLayout);
