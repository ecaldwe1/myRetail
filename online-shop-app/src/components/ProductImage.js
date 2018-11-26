import React from 'react';

function ProductImage(props) {
    if (!props.main_image || props.main_image === undefined) {
        return null;
    } else {
        return (
            <div>
                <img
                    src={props.main_image[0].PrimaryImage[0].image}
                    alt={props.product_title}/>
            </div>
        );
    }
}

export default ProductImage;