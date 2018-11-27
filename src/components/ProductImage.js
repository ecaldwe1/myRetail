import React from 'react';
import {FaSearchPlus} from 'react-icons/fa';

function ProductImage(props) {
    if (!props.main_image || props.main_image === undefined) {
        return null;
    } else {
        return (
            <div>
                <img
                    src={props.main_image[0].PrimaryImage[0].image}
                    alt={props.product_title}/>
                <div className="zoomIn">
                    <span>
                        <FaSearchPlus color="#a9a9a9" fontSize="1.5em"/>
                        <span className="viewLarger">view larger</span>
                    </span>
                </div>
            </div>
        );
    }
}

export default ProductImage;