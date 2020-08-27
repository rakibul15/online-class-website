import React from 'react';
import courses from '../../fakeData';
const Cart = (props) => {
    const cart = props.cart;
    const total = (cart.reduce((total, purchase) => total + purchase.price, 0)).toFixed(2);
    let name = "";
    let price2 = ""
    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];
        name = name + product.title + " $" + product.price + " ";
    }
    return (
        <div>
            <h4>Course Purchase Summery</h4>
            <h5>Course added : {cart.length}</h5>
            {
                <li className="d-flex my-2 justify-content-between">
                    <p><small>{name}</small></p>
                </li>
            }
            <h5>Total Price : {total}</h5>
        </div>
    );
};

export default Cart;