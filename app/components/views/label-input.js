/**
 * Created by johib.khan on 09-01-2017.
 */
import React from 'react';

export default React.createClass({

  render: function(props) {
    return (

        <div  className="form-group">
          <label>{this.props.label}</label>
          <input name={this.props.name} id={this.props.name} className="form-control input-xs"/>
        </div>

    );
  }

});
