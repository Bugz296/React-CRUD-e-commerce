import React from 'react';
class CartBox extends React.Component{
    render(){
        let { image, name, quantity, price } = this.props.item;
        return(
            <div className="cart-item">
                <img src={image} alt={name} className='order-item'/> x {quantity} = <span className='price-sub'>₱ {quantity * price}</span>
            </div>
        );
    };
}
export default CartBox;