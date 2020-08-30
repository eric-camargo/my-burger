import React from 'react';

import classes from './NavigationItems.module.css';

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <li>
      <a href='/' className={classes.active}>BurgerBuilder</a>
      <a href='/'>Checkout</a>

    </li>
  </ul>
);

export default NavigationItems;
