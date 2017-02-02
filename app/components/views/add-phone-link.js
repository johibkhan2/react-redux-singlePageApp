/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react';
import { Link } from 'react-router';

export default React.createClass({

  render: function() {
    return (
       <li className="add-phone"><Link to="/phones/addPhone" activeClassName="active" >Add Phone</Link></li>
    );
  }

});



