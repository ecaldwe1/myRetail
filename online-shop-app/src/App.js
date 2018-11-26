/* eslint-disable no-unused-expressions */
import React, {Component} from 'react';
import PurchaseChannel from './components/PurchasingChannel';
import {IoMdPricetag} from 'react-icons/io/index';
// import IOIcons from 'react-icons/io'; 
// import logo from './logo.svg'; import
import ProductFeatures from './components/ProductFeatures.js';
import ProductPrice from './components/ProductPrice.js';
import './App.css';
import StarRating from './components/StarRating.js';
import ReactSlickDemo from './components/ImageCarousel.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div className="App">
                <div className="row">
                    <LeftColumn product_obj={this.state.data}/> 
                    <RightColumn product_obj={this.state.data}/>
                </div>
            </div>
        );
    }

    loadData() {
        fetch('/data/item-data.json')
            .then(response => response.json())
            .then(data => {
                this.setState({data: data.CatalogEntryView[0]});
            })
            .catch(err => console.error(this.props.url, err.toString()))
        }

    componentDidMount() {
        this.loadData()
    }

}

export default App;

function LeftColumn(props) {
    if (!props || props === undefined) {
        return null;
    } else {
      // console.log("LeftColumn: ", props)
        return (
            <div className="col-6 mx-auto">
                <h1 className="ProductTitle">{props.product_obj.title}</h1>
                <ProductImage main_image={props.product_obj.Images} product_title={props.product_obj.title}/>
                <div className="row">
                <ReactSlickDemo images={props.product_obj.Images}/>
                    {/* <Gallery images={props.product_obj.Images}/> */}
                </div>
                <ProductReviews product_reviews={props.product_obj.CustomerReview}/>
            </div>

        );
    }
}

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

function ProductReviewOverall(props) {
    if (!props || props === undefined) {
        return null;
    } else {
        return (
            <div className="row OverallStarsRow">
                <div className="col-6">
                    <div className="row FiveStars">
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

function ProductProReview(props) {
    if (!props.pro || props.pro === undefined) {
        return null;
    } else {
        return (
            <div className="col-sm-5">
                <div>
                    <div>
                      <StarRating rating={props.pro[0].overallRating}/>
                      </div>
                    <p className="card-text review-title">{props.pro[0].title}</p>
                </div>
                <div className="small-text">
                    {/* <span> */}
                        {props.pro[0].review}
                    {/* </span> */}
                </div>
            </div>
        );
    }
}

function ProductConReview(props) {
    if (!props.con || props.con === undefined) {
        return null;
    } else {
        return (
            <div className="col-sm-5">
                <div>
                    <div>
                        <StarRating rating={props.con[0].overallRating}/></div>
                    <p className="card-text review-title">{props.con[0].title}</p>
                </div>
                <div className="small-text">
                    {/* <span> */}
                        {props.con[0].review}
                    {/* </span> */}
                </div>
            </div>
        );
    }
}

function ProductReviews(props) {
    // console.log("ProductReviews: ", props);
    if (!props.product_reviews || props.product_reviews === undefined) {
        return null;
    } else {
        return (
            <div>
                <ProductReviewOverall product_review_count={props.product_reviews[0].totalReviews} 
                                      product_overall_rating={props.product_reviews[0].consolidatedOverallRating}/>
                <div className="col-sm-10">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-5">
                                    <div>
                                        <h6 className="card-title">PRO</h6>
                                    </div>
                                    <div>
                                        <span>
                                            <small>most helpful 4-5 star review</small>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div>
                                        <h6 className="card-title">CON</h6>
                                    </div>
                                    <div>
                                        <span>
                                            <small>most helpful 1-2 star review</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                                <ProductProReview pro={props.product_reviews[0].Pro}/>
                                <ProductConReview con={props.product_reviews[0].Con}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function RightColumn(props) {
    // console.log("RightColumn: ", props)
    return (
        <div className="col-6 right-col">
            <ProductPrice price={props.product_obj.Offers}/>
            <hr/>
            <div className="row">
              <IoMdPricetag /> PROMOS!
            </div>
            {/* <ProductPromotions promos={props.product_obj.Promotions}/> */}
            <hr/>
            <PurchaseChannel purchasingChannelCode={props.product_obj.purchasingChannelCode} />
            <ReturnPolicy/>
            <ListShareButtons/>
            <h1 className="ProductFeatures">Product Features</h1>
            <ProductFeatures features={props.product_obj.ItemDescription}/>
            {/* <div className="Product-description">{props.product_obj.description}</div> */}
        </div>
    );
}

function ListShareButtons() {
    return (
        <div className="row">
            <div className="col-4">
                <button type="button" className="btn btn-light btn-sm minor-btn">ADD TO REGISTRY</button>
            </div>
            <div className="col-4">
                <button type="button" className="btn btn-light btn-sm minor-btn">ADD TO LIST</button>
            </div>
            <div className="col-4">
                <button type="button" className="btn btn-light btn-sm minor-btn">SHARE</button>
            </div>
        </div>
    );
}

function ReturnPolicy(props){
  return (
    <div className="row">
        <div className="col-2">
            <h5>returns</h5>
        </div>
        <div className="col">
            <p className="small-text">
              This item must be returned within 30 days of the ship date. 
              See <a href="#">return policy</a> for details. 
              Prices, promotions, styles, and availability may vary by store and online.
            </p>
        </div>
    </div>
  );
}


