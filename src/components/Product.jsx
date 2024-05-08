import React, { Component } from 'react';
import { connect } from 'react-redux';

class Product extends Component {
    render() {
        let { product } = this.props;
        let { seeProductDetails } = this.props;
        return (
            <div className="card text-left">
                <img className="card-img-top" src={product.image_url} width={170} height={300} alt={product.product_name} />
                <div className="card-body">
                    <h4 className="card-title">{product.product_name}</h4>
                    <button className="btn btn-success" onClick={() => seeProductDetails(product)}>See Product Details</button>
                    <button className="btn btn-danger" onClick={() => this.props.addToCart(product)}>Add To Cart</button>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            let productAdded = { product, quantity: 1 };
            dispatch({
                type: 'ADD_TO_CART',
                productAdded
            })
        }
    }
}

export default connect({}, mapDispatchToProps)(Product);

