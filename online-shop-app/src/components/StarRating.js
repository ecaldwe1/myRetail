/* eslint-disable no-unused-expressions */
import React from 'react';
import {IoMdStar, IoMdStarOutline} from 'react-icons/io';

function StarRating(props) {
    const rating_number = props.rating;
    // 5 star rating system, so we need an array of 5 elements
    var fivestars = [1, 2, 3, 4, 5];
    var listItems = fivestars.map((star) => {
        if (star <= rating_number) {
            return <IoMdStar key={star.toString()}/>
        } else {
            return <IoMdStarOutline key={star.toString()}/>
        }
    });
    return (
    <div className="FiveStars">
        {listItems}
    </div>
    )
}
export default StarRating;