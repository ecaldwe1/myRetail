import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
        <Product
          date={product.date}
          product_obj={product.product_obj}
        />
      </div>
    );
  }
}

export default App;

function formatDate(date) {
  return date.toLocaleDateString();
}

function Product(props) {
  return (
    <div className="product">
      <div className="ProductInfo">
        <div className="UserInfo-name">
          {props.product_obj.name}
        </div>        
        <img
          className="Image"
          src={props.product_obj.primary_image}
          alt={props.product_obj.name}
        />
      </div>
      <div className="Product-price">{props.product_obj.price}</div>
      <div className="Product-description">
        {formatDate(props.product_obj.date)}
      </div>
    </div>
  );
}

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

