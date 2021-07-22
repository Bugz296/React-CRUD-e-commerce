import React from 'react';
import ItemBox from './ItemBox';
// import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemForm';
import CartBox from './CartBox';

class RestoApp extends React.Component{
    state = {
        filter: 'All',
        total: 0,
        cart: [],
        items : [
        {
            id: 1,
            name: "Burger",
            price: 50,
            category: "Food",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046784.svg"
        },
        {
            id: 2,
            name: "Pizza",
            price: 100,
            category: "Food",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046771.svg"
        },
        {
            id: 3,
            name: "Fries",
            price: 25,
            category: "Food",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046786.svg"
        },
        {
            id: 4,
            name: "Coffee",
            price: 35,
            category: "Drink",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046785.svg"
        },
        {
            id: 5,
            name: "Iced Tea",
            price: 45,
            category: "Drink",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046782.svg"
        },
        {
            id: 6,
            name: "Hot Tea",
            price: 45,
            category: "Drink",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046792.svg"
        }]
    };

    changeDisplay = (category) => {
        this.setState({
            filter: category
        }); 
    };

    addToCart = (item) => {
        let cart_copy = [...this.state.cart];
        let is_exist = false;
        for(let i=0; i<cart_copy.length; i++){
            if(cart_copy[i].id === item.id){
                cart_copy[i].quantity += 1;
                is_exist = true;
                break;
            }
        }
        if(!is_exist){
            item.quantity = 1;
            cart_copy.push(item);
        }
        this.setState({
            cart: cart_copy
        });
    };

    deleteItem = (item) => {
        let item_copy = [...this.state.items];
        item_copy = item_copy.filter(i => i.id !== item.id);
        this.setState({
            items: item_copy
        });
    }

    setEditItem = (item) => {
        this.setState({
            editItem: item
        });
    }

    updateStateItems = (updated_item) => {
        let items_copy = [...this.state.items];
        let index = items_copy.findIndex(item => item.id === updated_item.id);
        items_copy[index] = updated_item;
        this.setState({
            items: items_copy,
            editItem: null
        });
    }

    render(){
        let items = this.state.filter === 'All' ?
            this.state.items :
            this.state.items.filter( item => item.category === this.state.filter);

        let displayItems = items.map( item => 
            <ItemBox 
                key={item.id} 
                item={item} 
                addToCart={this.addToCart} 
                deleteItem={this.deleteItem}
                setEditItem={this.setEditItem}
            />);

        let displayCart = this.state.cart.map((item) => {
            return <CartBox key={item.id} item={item} />
        });

        return(
            <div className="container">
                {/* <AddItemForm /> */}
                {this.state.editItem 
                    && <EditItemForm 
                        item={this.state.editItem} 
                        updateStateItems={this.updateStateItems} 
                    />}
                <div>
                    <button onClick={()=>{this.changeDisplay('All')}}>All</button>
                    <button onClick={()=>{this.changeDisplay('Drink')}}>Drinks</button>
                    <button onClick={()=>{this.changeDisplay('Food')}}>Food</button>
                </div>
                <div id="container-items">
                    { displayItems }
                </div>
                <div id="container-cart">
                    <h3>Cart:</h3>
                    { displayCart }
                    <h4>Total: ₱ {this.state.total} </h4>
                </div>
            </div>
        );
    };
}
export default RestoApp;