import React from 'react';
class ItemBox extends React.Component{
    render(){
        let { name, price, image } = this.props.item;
        return(
            <div className="item-box">
                <div>
                    <img src={image} alt={name} />
                </div>
                <div className="item-details">
                    <h5>{name}</h5>
                    <p><small>₱ {price}</small></p>
                    <p><button onClick={()=>{this.props.addToCart(this.props.item)}} className="btn btn-order">Order</button></p>
                    <p>
                        <button onClick={()=>{this.props.setEditItem(this.props.item)}} className="btn btn-edit">Edit</button>
                        <button onClick={()=>{this.props.deleteItem(this.props.item)}} className="btn btn-delete">Delete</button>
                    </p>
                </div>
            </div>
        );
    };
}
export default ItemBox;