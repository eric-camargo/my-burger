import React from 'react';

import classes from './Logo.module.css';
import logo from '../../assets/images/burger.png';

const Logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={logo} alt='MyBurger' />
  </div>
);

export default Logo;
