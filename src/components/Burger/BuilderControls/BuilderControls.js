import React from 'react';

import classes from './BuilderControls.module.css';
import BuilderControl from './BuilderControl/BuilderControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' }
];

const BuilderControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>US$ {props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuilderControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disable[ctrl.type]} />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}>Place Your Order</button>
  </div>
);

export default BuilderControls;
