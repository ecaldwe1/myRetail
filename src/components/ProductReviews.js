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
                            <div className="row d-flex flex-nowrap">
                                <div className="col-sm-12 col-md-6 flex-shrink-1">
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
                            <div className="row review-body">
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
            <div className="row OverallStarsRow d-flex flex-nowrap">
                <div className="col-sm-6 col-md-6">
                    <div className="row d-flex flex-nowrap">
                      <StarRating rating={props.product_overall_rating}/>
                        <span>
                            <strong> overall</strong>
                        </span>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6">
                    <div className="ReviewLink d-flex flex-nowrap">
                        <a className="App-link flex-shrink-1 a-styled" href="#">
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
        const review_date = formatDate(props.review[0].datePosted)
        return (
            <div className="col-6">
                <div>
                    <div>
                      <StarRating rating={props.review[0].overallRating}/>
                      </div>
                    <p className="card-text review-title">{props.review[0].title}</p>
                </div>
                <div className="small-text review-text">
                        {props.review[0].review}
                </div>
                <div className="small-text">
                    <span>
                        <a href="">{props.review[0].screenName}</a> {review_date}
                    </span>
                </div>
            </div>
        );
    }
}


function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}