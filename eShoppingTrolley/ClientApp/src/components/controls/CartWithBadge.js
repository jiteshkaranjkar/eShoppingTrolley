import React from 'react';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartWithBadge = ({ count }) => {
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={count} color="secondary">
        <ShoppingCartIcon />
      </Badge >
    </IconButton>
  );
}
export default CartWithBadge;