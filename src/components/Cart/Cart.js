import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total,prd) => total + prd.price,0)
    /* anather way total*/
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total + product.price;

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
       else if (total < 0){
           shipping = 12.99;
       } 
    const tax = (total / 10).toFixed(2);
    const grandTotal =(total + shipping + Number(tax)).toFixed(2);
    return (
        <div>
            <h4>Order summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p><small>shipping charge: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>TOtal price: {grandTotal}</p>
        </div>
    );
};

export default Cart;