  import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from './controls/ProductCard';
import { Typography, Grid } from '@material-ui/core';
import './Products.css';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: '3px 3px 5px 6px #90caf9',
  },
  cardActions: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 'auto',
  },
  subText: {
    paddingTop: '15px', 
  }
}));

const Products = ({ onUpdateCount, onAddToCart, trolleys }) => {
  const classes = useStyles();
  return (
    <div>

      <div style={{ display: "flex" }} >
        <Typography color="inherit" variant="h3" gutterBottom >
          Beers 
        </Typography>
        <Typography color="inherit" variant="h5" className={classes.subText} gutterBottom >
          &nbsp;(Most popular)
        </Typography>
      </div>
      <Grid container spacing={3}>
        {trolleys.map(trolley =>
          <Grid item xs={12} sm={6} md={3} key={trolley.product.id} >
            <ProductCard key={trolley.product.id} shoppingItem={trolley} onAddToCart={onAddToCart} onUpdateCount={onUpdateCount} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default Products;