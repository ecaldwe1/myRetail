import React, {Fragment} from 'react';

function ProductFeatures(props) {
    if (!props.features || props.features === undefined) {
        return null;
    } else {
        if (!props.features[0].features || props.features[0].features === undefined) {
            return null;
        } else {
            const feature_list = props.features[0].features;
            const listItems = feature_list.map((feature) => 
                <li key={feature.toString()}
                    dangerouslySetInnerHTML={{ __html: feature}}>
                </li>
            );
            return (
                <div className="promos_row row">
                    <ul>
                        {listItems}
                    </ul>
                </div>
            );
        }
    }
}

export default ProductFeatures;