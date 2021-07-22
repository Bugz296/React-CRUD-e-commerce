import React from 'react';
class EditItemForm extends React.Component{
    state = {
        id: this.props.item.id,
        name: this.props.item.name,
        category: this.props.item.category,
        price: this.props.item.price,
        image: this.props.item.image
    }
    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    render(){
        return(
            <div id="add-item-form">
                <input type="text" value={this.state.name} name="name" onChange={this.inputChangeHandler} placeholder="Item Name" />
                <input type="text" value={this.state.category} name="category" onChange={this.inputChangeHandler} placeholder="Category" />
                <input type="text" value={this.state.price} name="price" onChange={this.inputChangeHandler} placeholder="Price" />
                <input type="text" value={this.state.image} name="image" onChange={this.inputChangeHandler} placeholder="Image" />
                <button onClick={()=>{this.props.updateStateItems(this.state)}}>Edit</button>
            </div>
        );
    };

}
export default EditItemForm;