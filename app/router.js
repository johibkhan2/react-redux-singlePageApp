import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayoutContainer from './components/containers/search-layout-container';

// Pages
import Home from './components/home';
import phoneListContainer from './components/containers/phone-list-container';
import phoneFormContainer from './components/containers/phone-form-container';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="phones">
      <Route component={SearchLayoutContainer}>
        <IndexRoute component={phoneListContainer} />
      </Route>
       <Route path="addPhone" component={phoneFormContainer}/>
    </Route>



    </Route>
  </Router>
);
