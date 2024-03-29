import React from 'react';
import './checkout.styles.scss';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/card.selectors';
import  CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, total}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem =>(
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))
    }
    <div className='total'>
      <span>TOTAL: ${total}</span>
    <div className='test-warning'>
      4242 4242 4242 4242 Exp: 01/20 CVV: 123
    </div>
      <StripeCheckoutButton price={total}/>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);
