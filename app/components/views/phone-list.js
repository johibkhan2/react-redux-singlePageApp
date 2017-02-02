import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.phones.map(phone => {

        return (
          <div key={phone.id} className="data-list-item">
            <div className="details">
              <Link to={'/phones/' + phone.id}>{phone.name}</Link>
            </div>
          </div>
  
        );

      })}

    </div>
  );
}
