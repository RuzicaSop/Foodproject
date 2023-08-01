import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/food.png';
import classes from './Header.module.css';
import LoginButton from './LoginButton';
import {IoFastFoodOutline} from 'react-icons/io5';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}> 
        <IoFastFoodOutline className={classes.icons}/>
        <h1> Fast Food</h1>
        <LoginButton onClick={props.onShowLogin}/>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;