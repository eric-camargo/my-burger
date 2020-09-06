import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>I Hope it tastes good!</h1>
      <Burger ingredients={props.ingredients} />
      <Button
        btnType='Danger'
        clicked={props.clickedCancel}>CANCEL</Button>
      <Button
        btnType='Success'
        clicked={props.clickedContinue}>CONTINUE</Button>
    </div>
  )
}

export default CheckoutSummary;
