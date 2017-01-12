import React from 'react';
import SearchFormContainer from '../containers/search-form-container';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="search">
      <header className="search-header">
        <li className="add-phone"><Link to="/phones/addPhone" activeClassName="active" >Add Phone</Link></li>
        <SearchFormContainer searchType={props.searchType} />
      </header>
      <div className="search-results">
        {props.children}
      </div>
      <footer className="search-footer">
        {props.totalResults} Results
      </footer>
    </div>
    );
}
