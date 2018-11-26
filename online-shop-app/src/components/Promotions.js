import React, {Fragment} from 'react';
import {IoMdPricetag} from 'react-icons/io';

function Promotions(props){
    if (!props.promos || props.promos === undefined) {
        return null;
    } else {
        const promo_list = props.promos;
        console.log(promo_list)
        const promoItems = promo_list.map((promo) => 
            <li key={promo.promotionIdentifier}>
                <IoMdPricetag/> promo.Description[0].shortDescription
            </li>
        );
                // <IoMdPricetag /> PROMOS!
            // </Fragment>
        return(
            <Fragment>
                <hr/>
                <ul className="promo_ul">
                {promoItems}
                </ul>
                
            </Fragment>
            
        );
    }
}

export default Promotions;