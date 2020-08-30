import React from 'react';

import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map(igKey => {
    return (
      <li>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
      </li> );
  });

  return (
    <>
      <h3>Your Order</h3>
      <p>Price of your Order <strong>US${props.price.toFixed(2)}</strong></p>
      <p>Ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
      <Button btnType={'Danger'} clicked={props.canceled}>CANCEL</Button>
      <Button btnType={'Success'} clicked={props.continue}>BUY</Button>
    </>
  );
};

export default OrderSummary;
