import React from 'react';
import StarRating from './StarRating';

function ProductReviews(props) {
    if (!props.product_reviews || props.product_reviews === undefined) {
        return null;
    } else {
        return (
            <div>
                <ProductReviewOverall product_review_count={props.product_reviews[0].totalReviews} 
                                      product_overall_rating={props.product_reviews[0].consolidatedOverallRating}/>
                <div className="col-sm-12 col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div>
                                        <h6 className="card-title">PRO</h6>
                                    </div>
                                    <div>
                                        <span className="small-text">
                                            most helpful 4-5 star review
                                        </span>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div>
                                        <h6 className="card-title">CON</h6>
                                    </div>
                                    <div>
                                        <span className="small-text">
                                            most helpful 1-2 star review
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                                <ProductSingleReview review={props.product_reviews[0].Pro}/>
                                <ProductSingleReview review={props.product_reviews[0].Con}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductReviews;

function ProductReviewOverall(props) {
    if (!props || props === undefined) {
        return null;
    } else {
        return (
            <div className="row OverallStarsRow">
                <div className="col-6">
                    <div className="row">
                      <StarRating rating={props.product_overall_rating}/>
                        <span>
                            <strong> overall</strong>
                        </span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="ReviewLink">
                        <a className="App-link" href="#">
                            View all {props.product_review_count} reviews
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

function ProductSingleReview(props) {
    if (!props.review || props.review === undefined) {
        return null;
    } else {
        return (
            <div className="col-sm-12 col-md-6">
                <div>
                    <div>
                      <StarRating rating={props.review[0].overallRating}/>
                      </div>
                    <p className="card-text review-title">{props.review[0].title}</p>
                </div>
                <div className="small-text">
                        {props.review[0].review}
                </div>
            </div>
        );
    }
}