import React from 'react';
class AddItemForm extends React.Component{
    state = {
        name: '',
        category: '',
        price: '',
        image: ''
    }
    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    render(){
        return(
            <div id="add-item-form">
                <form autoComplete="off">
                    <input type="text" value={this.state.name} name="name" onChange={this.inputChangeHandler} placeholder="Item Name" />
                    <input type="text" value={this.state.category} name="category" onChange={this.inputChangeHandler} placeholder="Category" />
                    <input type="text" value={this.state.price} name="price" onChange={this.inputChangeHandler} placeholder="Price" />
                    <input type="text" value={this.state.image} name="image" onChange={this.inputChangeHandler} placeholder="Image" />
                    <input type="submit" />
                </form>
            </div>
        );
    };

}
export default AddItemForm;