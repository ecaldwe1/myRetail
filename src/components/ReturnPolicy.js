import React from 'react';

function ReturnPolicy(props){
  return (
    <div className="row d-flex flex-nowrap">
        <div className="col-2 flex-shrink-1">
            <h5>returns</h5>
        </div>
        <div className="col-10 flex-shrink-2">
            <p className="small-text return-policy">
              This item must be returned within 30 days of the ship date. 
              See <a href="#">return policy</a> for details. 
              Prices, promotions, styles, and availability may vary by store and online.
            </p>
        </div>
    </div>
  );
}

export default ReturnPolicy;
