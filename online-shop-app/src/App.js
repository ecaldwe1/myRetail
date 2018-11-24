import React, { Component } from 'react';
// import IOIcons from 'react-icons/io';
// import logo from './logo.svg';
// import Carousel from './Carousel'; 
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

      <div aria-label="breadcrumb">
        <ul className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active"><a href="#">Appliances</a></li>
        </ul>
      </div>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <LeftColumn
          product_obj={product.product_obj}
        />
      </div>
    );
  }
}

export default App;

// function formatDate(date) {
//   return date.toLocaleDateString();
// }
function LeftColumn (props){
  return (
    <div className="col-6">
      <h1 className="ProductTitle">{props.product_obj.name}</h1>     
      <ProductImage product_obj={props.product_obj}/>
      <ProductReviews product_obj={props.product_obj}/>
    </div>

  );
}

function ProductImage(props) {
  return (
    <div>
      <img src={props.product_obj.primary_image}/>
    </div>
  );
}


function ProductReviews(props){
  return (
    <div>
        <div>stars row {props.product_obj.overall_rating} <span><strong>overall</strong></span>
        <div className="ReviewLink">
          <a className="App-link" href="#">View all X reviews</a>
        </div>
        </div>
    </div>
  )
}

// function Product(props) {
//   return (
//     <div className="Product">
//       <ProductTitleImage product_obj={props.product_obj}/>
//       <div className="Product-price">{props.product_obj.price}</div>
//       <div className="Product-description">{props.product_obj.description}</div>
//       <ProductReviews product_obj={props.product_obj}/>
//     </div>
//   );
// }

const product = {
  product_obj: {
    name: 'Ninja\u2122 Professional Blender with Single Serve Blending Cups',
    primary_image: 'http://target.scene7.com/is/image/Target/14263758',
    date: new Date(),
    price: '$139.99',
    description: 'For the first time EVER - you get the same professional performance power in the' +
     'Single Serve as well as the XL 72 oz pitcher! The Ninja\u2122 Professional Blender with' +
     'Single Serve Blending Cups allow you to crush ice into snow, blend whole fruits and vegetables ' + 
     'into nutritious beverages, and create resort style blended drinks! Full size blender performance ' + 
     'now in individual cups.',
    overall_rating: 5,

  },
};
// ReactDOM.render(
  // <Comment
  //   date={comment.date}
  //   text={comment.text}
  //   author={comment.author}
  // />,
//   document.getElementById('root')
// );