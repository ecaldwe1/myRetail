import React, {Fragment} from 'react';
import {IoMdPricetag} from 'react-icons/io';

function Promotions(props){
    if (!props.promos) {
        return null;
    } else {
        const promo_list = props.promos;
        const promoItems = promo_list.map((promo) => 
            <li key={promo.promotionIdentifier}>
                <IoMdPricetag className="promo-tag"/> {promo.Description[0].shortDescription}
            </li>
        );
        return(
            <Fragment>
                <hr/>
                <div className="row">
                <ul className="promo-ul">
                {promoItems}
                </ul>
                </div>
            </Fragment>
            
        );
    }
}

export default Promotions;