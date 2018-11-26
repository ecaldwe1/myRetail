import React, {Fragment} from 'react';
import PurchaseChannel from './PurchasingChannel'
import { FaPlusCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';


function Quantity(props){
    if(!props){
        return null;
    } else {
        console.log("PROPS: ", props)
        return (
            <Fragment>
                <QuantityForm product_obj={props.product_obj}/>
            </Fragment>
        );
    }
}

export default Quantity;

class QuantityForm extends React.Component {

    constructor(props){
       super(props);
       this.state={ count: 1}
    }

    // We don't want to be able to add negative products to our cart
    checkDisabled(minusClass){
        if (this.state.count === 1){
            minusClass.push("disabled");
            minusClass = minusClass.join(' ');
        }
        return minusClass;
    }

    onclick(type){
        this.setState(prevState => {
            return {count: type === 'add' ? prevState.count + 1: prevState.count - 1}
        });
    }

    render() {
        let minusBtnClass = ["btn btn-link"]
        return (
        <form>
                <div className="row">
                    <div className="col-sm-6 col-md-6">
                        quantity:             
                        <span>
                            <a href="#" className={this.checkDisabled(minusBtnClass)} role="link" onClick={this.onclick.bind(this, 'sub')} value='Dec'>
                                <FaMinusCircle className="quantity-icon"/>
                            </a>
                            {this.state.count}
                            <a href="#" className="btn btn-link" role="link" onClick={this.onclick.bind(this, 'add')} value='Inc'>
                                <FaPlusCircle className="quantity-icon"/>
                            </a>
                        </span>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <input id="productQuantity" type="text" value={this.state.count} onChange={this.handleChange} hidden/>
                    </div>
                </div>
        </form>
        );
    }
}