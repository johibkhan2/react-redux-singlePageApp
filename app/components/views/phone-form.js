/**
 * Created by johib.khan on 10-01-2017.
 */
import React from 'react';
import LabelInput from '../views/label-input';

export default React.createClass({

  render: function(props) {
    return (
      <form id={this.props.id} name={this.props.id} onSubmit={this.props.handleSubmit}>
        <LabelInput label="Phone" name="phoneName" id="phoneName" />
        <br/>
        <LabelInput label="Price" name="phonePrice" id="phonePrice" />
        <br/>
        <p id="error">{this.props.message}</p>
        <br/>
        <button className="btn btn-default" >Submit</button>
      </form>

    );
  }

});
