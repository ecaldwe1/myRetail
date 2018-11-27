import React from 'react';

function ReturnPolicy(props){
  return (
    <div className="row static-position">
        <div className="col-2">
            <h5>returns</h5>
        </div>
        <div className="col">
            <p className="small-text">
              This item must be returned within 30 days of the ship date. 
              See <a href="#">return policy</a> for details. 
              Prices, promotions, styles, and availability may vary by store and online.
            </p>
        </div>
    </div>
  );
}

export default ReturnPolicy;
