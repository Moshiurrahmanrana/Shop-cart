import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total,prd) => total + prd.price,0)
    return (
        <div>
            <h4>Order summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>TOtal price: {total}</p>
        </div>
    );
};

export default Cart;