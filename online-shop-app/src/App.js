/* eslint-disable no-unused-expressions */
import React, {Component} from 'react';
import PurchaseChannel from './components/PurchasingChannel';
import ProductFeatures from './components/ProductFeatures';
import ProductPrice from './components/ProductPrice';
import ProductReviews from './components/ProductReviews';
import ReactSlickDemo from './components/ImageCarousel';
import ProductImage from './components/ProductImage';
import ListShareButtons from './components/ListShareButtons';
import ReturnPolicy from './components/ReturnPolicy';
import Promotions from './components/Promotions';
import './App.css';


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
        return (
            <div className="col-sm-12 col-md-5">
                <h1 className="ProductTitle">{props.product_obj.title}</h1>
                <ProductImage main_image={props.product_obj.Images} product_title={props.product_obj.title}/>
                <div className="row">
                    <ReactSlickDemo images={props.product_obj.Images}/>
                </div>
                <ProductReviews product_reviews={props.product_obj.CustomerReview}/>
            </div>

        );
    }
}

function RightColumn(props) {
    // console.log("RightColumn: ", props)
    return (
        <div className="col-6 right-col">
            <ProductPrice price={props.product_obj.Offers}/>
            <div className="row">
              {/* <IoMdPricetag /> PROMOS! */}
              <Promotions promos={props.product_obj.Promotions}/>
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


