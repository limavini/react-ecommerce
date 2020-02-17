import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { CartDropdownContainer, CartItems} from "./cart-dropdown.styles"

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItems>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span>Your cart is empty</span>
      )}
    </CartItems>
    <CustomButton onClick={() => { 
      history.push("/checkout");
      
      // DESPACHA ESSA AÇÃO
      dispatch(toggleCartHidden());
      }}>GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>
);

// Exibir
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});



export default withRouter(connect(mapStateToProps)(CartDropdown));
