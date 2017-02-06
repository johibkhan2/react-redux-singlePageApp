/**
 * Created by johib.khan on 02-01-2017.
 */

import React from 'react';
import { connect } from 'react-redux';
import PhoneList from '../views/phone-list';
import * as phoneApi from '../../api/phone-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';
import { getPhonesSuccess } from '../../actions/phone-actions';
import axios from 'axios';
import $ from 'jquery';


const PhoneListContainer = React.createClass({
    
     
    
  componentDidMount: function() {
    phoneApi.getPhones();
    store.dispatch(loadSearchLayout('phones', 'Phone Results'));
    window.addEventListener('scroll', this.handleScroll);
  },
  
  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
},

loadMore : function(event){
        /*****  
         * 
         * java script solun however it doesnot work in mozill and ie
         * var target = event.target || event.srcElement;
         let scrollTop = target.body.scrollTop;
         var body = document.body,
         html = document.documentElement;
         var height = Math.max( body.scrollHeight, body.offsetHeight, 
         html.clientHeight, html.scrollHeight, html.offsetHeight );****/
        /* If you wanted to instead check if the user is near the bottom, it'd look something like this:
         
         $(window).scroll(function() {
         if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
         alert("near bottom!");
         }
         })*/
     if($(window).scrollTop() + $(window).height() == $(document).height())
         return true;
         return false;

},

handleScroll: function(event) {
    event.preventDefault();
    if(this.loadMore(event)){
        console.log("scrolling");
        phoneApi.getMorePhones(this.props.loadRange);      
    }                   
        
},

  render: function() {
    return (
      <PhoneList phones={this.props.phones}  />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    phones: store.phoneState.phones,
    loadRange: store.phoneState.loadRange
  };
};

export default connect(mapStateToProps)(PhoneListContainer);

