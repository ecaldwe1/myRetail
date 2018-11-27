/* eslint-disable no-unused-expressions */
import React, {Component, Fragment} from 'react';
import ListShareButtons from './components/ListShareButtons';
import ProductFeatures from './components/ProductFeatures';
import ProductImage from './components/ProductImage';
import ProductPrice from './components/ProductPrice';
import ProductReviews from './components/ProductReviews';
import Promotions from './components/Promotions';
import PurchaseChannel from './components/PurchasingChannel';
import Quantity from './components/Quantity';
import SlickCarousel from './components/ImageCarousel';
import ReturnPolicy from './components/ReturnPolicy';
import './App.css';
import { URLSearchParams } from 'url';

const queryString = require('query-string');

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div className="App container-fluid">
                <div className="row">
                    <ProductDetail product_obj={this.state.data}/> 
                </div>
            </div>
        );
    }

    loadData() {
        const json_data_file = '/data/item-data.json'; 
        fetch(json_data_file)
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

function ProductDetail(props){
    if (!props) {
        return null;
    } else {
        return (
        <Fragment>
            <div className="col-sm-12 col-md-5">
                <h1 className="ProductTitle text-center">{props.product_obj.title}</h1>
                <ProductImage main_image={props.product_obj.Images} product_title={props.product_obj.title}/>
                <div className="row image-carousel">
                    <SlickCarousel images={props.product_obj.Images}/>
                </div>
            </div>
            <div className="col-sm-12 col-md-7 right-col">
                <ProductPrice price={props.product_obj.Offers}/>
                <Promotions promos={props.product_obj.Promotions}/>
                <hr/>
                <Quantity/>
                <PurchaseChannel purchasingChannelCode={props.product_obj.purchasingChannelCode} />
                <ReturnPolicy/>
                <ListShareButtons/>
                <h1 className="ProductFeatures">Product Features</h1>
                <ProductFeatures features={props.product_obj.ItemDescription}/>
            </div>
            <div className="col-sm-12 col-md-5 review-column">
                <ProductReviews product_reviews={props.product_obj.CustomerReview}/>
            </div>
        </Fragment>
        );

    }
}


