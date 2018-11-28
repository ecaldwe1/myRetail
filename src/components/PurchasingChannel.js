import React from 'react';

function PickUpButton(props) {
    return (
        <div className="PickupBtn">
            <button type="button" className="btn btn-dark btn-large major-btn">
                PICK UP IN STORE
            </button>
            <a href="#" className="small-text a-styled">find in a store</a>
        </div>
    );
}

function AddCartButton(props) {
    return <button type="button" className="btn btn-large major-btn Target-red-bkg">ADD TO CART</button>;
}

function PurchaseChannel(props) {
    const channelCode = props.purchasingChannelCode;
    console.log("CHANNEL_CODE: ", channelCode)
    if (channelCode === "0") {
        return (
            <div className="row d-flex flex-nowrap">
                <div className="col">
                    <PickUpButton/>
                </div>
                <div className="col">
                    <AddCartButton/></div>
            </div>
        );
    } else if (channelCode === "2") {
        return (
            <div className="row d-flex flex-nowrap">
                <div className="col">
                    <PickUpButton/>
                </div>
            </div>
            
        )
    } else if (channelCode === "1") {
        return (
            // <div className="row d-flex flex-nowrap">
            //     <div className="col">
                    <AddCartButton/>
            // /* </div>
            // </div> 
            
        )
    } else {
        return null;
    }
}

export default PurchaseChannel;
