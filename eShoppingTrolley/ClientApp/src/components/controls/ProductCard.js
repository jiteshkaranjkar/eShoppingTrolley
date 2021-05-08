import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { IconButton, Typography, Button, TextField } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ImageC from '../../data/Coopers.jpg';
import ImageCL from '../../data/CrownLager.jpg';
import ImageTED from '../../data/TooheysExtraDry.jpg';
import ImageVB from '../../data/VictoriaBitter.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    minHeight: 480,
    maxHeight: 600,
    boxShadow: '3px 3px 5px 6px #ccc',
  },
  ellipsis: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: 250
  },
  media: {
    paddingTop: '56.25%', // 16:9
    height: '40px',
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 'auto'
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  cardActions: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 'auto',
  },
  longText: {
    color: "#3a474e",
    lineHeight: '2rem',
    maxHeight: '3rem',
    display: 'block',
    overflow: 'hidden !important',
    textOverflow: 'ellipsis'
  },
  addToCart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 'auto',
    marginTop: 20,
    marginBottom: 30
  },
  icons: {
    marginTop: 10
  },
  textBox: {
    height: 100,
    width: 50,
  },
}));

const ProductCard = (props) => {
  const [itemCount, setItemCount] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    getEachShoppingItemQuantity();
  }, []);

  const getEachShoppingItemQuantity = () => {
    setItemCount(Number(localStorage.getItem(props.shoppingItem.product.id)));
  }


  const getCardMedia = (product) => {
    let img;
    switch (product.id) {
      case 1:
        img = ImageVB;
        break;
      case 2:
        img = ImageCL;
        break;
      case 3:
        img = ImageC;
        break;
      case 4:
      default:
        img = ImageTED;
        break;
    }
    return (
      <CardMedia
        className={classes.media}
        image={img}
        title={product.name}
      />)
  }

  const addItem = (productId, quantity) => {
    props.shoppingItem.quantity = ++quantity;
    localStorage.setItem(productId, props.shoppingItem.quantity);
    setItemCount(props.shoppingItem.quantity);
    props.onUpdateCount(1);
  }

  const removeItem = (productId, quantity) => {
    props.shoppingItem.quantity = --quantity;
    localStorage.setItem(productId, props.shoppingItem.quantity);
    setItemCount(props.shoppingItem.quantity);
    props.onUpdateCount(-1);
  }


  return (
    <Card className={classes.root}>
      <CardHeader className={classes.ellipsis}
        title={props.shoppingItem.product.brand}
        subheader={props.shoppingItem.product.type}
      />
      {getCardMedia(props.shoppingItem.product)}
      <CardContent>
        <div style={{ display: "flex" }} className={classes.cardActions}>
          <Typography variant="h4" noWrap>
            ${
              props.shoppingItem.product.promtionalPrice !== 0 ?
                props.shoppingItem.product.promtionalPrice :
                props.shoppingItem.product.price
            }
          </Typography>
          {props.shoppingItem.product.promtionalPrice !== 0 ?
            <Typography variant="body1" color="inherit" noWrap>
              &nbsp; Was ${props.shoppingItem.product.price}
            </Typography>
            : ""}
        </div>
        <div style={{ display: "flex" }} className={classes.cardActions}>
          <Typography variant="subtitle2" color="inherit" noWrap>
            {props.shoppingItem.product.promotion}
          </Typography>
        </div>
        <div style={{ display: "flex" }} className={classes.cardActions}>
          <Typography variant="subtitle2" color="inherit" noWrap>
            {props.shoppingItem.product.promotionDescription}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton onClick={() => removeItem(props.shoppingItem.product.id, props.shoppingItem.quantity)} className="align-self-center" disabled={props.shoppingItem.quantity === 0 ? true : false}>
          <RemoveCircleOutlineIcon style={{ fontSize: 35 }} color="action" aria-label="remove" className={classes.icons} />
        </IconButton>
        <TextField value={itemCount === null ? 0 : itemCount} variant="outlined" style={{ width: "50px", height: "50px" }} />
        <IconButton onClick={() => addItem(props.shoppingItem.product.id, props.shoppingItem.quantity)} className="align-self-center">
          <AddCircleOutlineIcon style={{ fontSize: 35 }} color="action" aria-label="add" className={classes.icons} />
        </IconButton>
      </CardActions>
      <Button variant="outlined" color="primary" className={classes.addToCart}>
        <Typography variant="overline" display="block" style={{ fontWeight: 750 }} gutterBottom >
          Add to cart
        </Typography>
      </Button>
    </Card>
  );
}

export default ProductCard;