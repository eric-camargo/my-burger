import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  let receivedIngredients = Object.keys(props.ingredients)
  .map(iKey => {
    return [...Array(props.ingredients[iKey])].map((_, i) => {
      return <BurgerIngredient key={iKey + i} type={iKey} />;
    });
  } )
  .reduce((arr, el) => {
    return arr.concat(el)
  }, []);
  if (receivedIngredients.length === 0) {
    receivedIngredients = <p><strong>Let's Start!</strong></p>
  }
  return (
    <div>
      <BurgerIngredient type="bread-top" />
      {receivedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
