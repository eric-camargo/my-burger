import React, {Component} from 'react';

import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postal: '',
      city: ''
    },
    ingredients: null,
    price: 0,
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Max',
        address: {
            street: 'teste 1',
            postal: '123414',
            city: 'sao paulo'
        },
        email: 'example@example.com'
      }
    }
    axios.post( 'orders.json', order)
      .then(response => {
        this.setState({loading:false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading:false});
      });
  }

  render () {
    let form = (
      <form>
        <input type='text' name='name' placeholder='Your Name' />
        <input type='text' name='email' placeholder='Your Email' />
        <input type='text' name='street' placeholder='Street' />
        <input type='text' name='postal' placeholder='Postal Code' />
        <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form=<Spinner/>;
    }
    return (
      <div className={classes.ContactData}>
        <h1>Complete your Contact Information:</h1>
        {form}
      </div>
    );
  }
}

export default ContactData;
