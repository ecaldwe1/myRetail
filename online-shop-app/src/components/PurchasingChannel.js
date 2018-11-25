import React, {Component} from 'react';

function PickUpButton(props) {
    return <button type="button" className="btn btn-dark btn-large major-btn">PICK UP IN STORE</button>;
}

function AddCartButton(props) {
    return <button type="button" className="btn btn-danger btn-large major-btn">ADD TO CART</button>;
}

function PurchaseChannel(props) {
    const channelCode = props.purchasingChannelCode;
    if (channelCode === "0") {
        return (
            <div className="row">
                <div className="col">
                    <PickUpButton/>
                </div>
                <div className="col">
                    <AddCartButton/></div>
            </div>
        );
    } else if (channelCode === "2") {
        return <PickUpButton/>;
    } else if (channelCode === "1") {
        return <AddCartButton/>;
    } else {
        return null;
    }

}

export default PurchaseChannel;
