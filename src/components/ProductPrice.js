import React from 'react';

function ProductPrice(props) {
    if (!props.price || props.price === undefined) {
        return null;
    } else {
        return (
            <div className="Product-price row">
                <h3>
                    <strong>
                        {props.price[0].OfferPrice[0].formattedPriceValue}
                    </strong>
                </h3>
                <span className="online-tag small-text">
                    online price
                </span>
            </div>
        );
    }
}

export default ProductPrice;