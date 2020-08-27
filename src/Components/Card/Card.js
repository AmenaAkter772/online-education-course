import React from 'react';
import './Card.css'

const Card = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, course) => total + course.coursesFees, 0 )
    
    return (
        <div className ="cartDecorate">
            <h2>Total Course : 15</h2> 
            <h4>Selected Course : {cart.length}</h4><br/>
            <p>Total Cost : $ {totalPrice}</p>
        </div>
    );
};

export default Card;