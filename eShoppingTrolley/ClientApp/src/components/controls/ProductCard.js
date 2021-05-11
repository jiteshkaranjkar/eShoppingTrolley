import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { IconButton, Typography, Button, TextField, Box } from '@material-ui/core';
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
    boxShadow: '3px 3px 5px 6px #90caf9',
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
    width: '54px',
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
  '@media (max-width: 595px)': {
    media: {
      height: '30px',
      width: '75px',
      margin: 'auto'
    },
  },
  '@media (max-width: 360px)': {
    media: {
      height: '30px',
      width: '85px',
      margin: 'auto'
    },
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
      default:
        img = ImageC;
        break;
      case 2:
        img = ImageCL;
        break;
      case 3:
        img = ImageTED;
        break;
      case 4:
        img = ImageVB;
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
    <Fragment>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <Card className={classes.root}>
          <CardHeader className={classes.ellipsis}
            title={props.shoppingItem.product.brand}
            subheader={props.shoppingItem.product.type}
          />
          {getCardMedia(props.shoppingItem.product)}
          <CardContent>
            <div style={{ display: "flex" }} className={classes.cardActions}>
              <Typography variant="h4" noWrap gutterBottom >
                ${
                  props.shoppingItem.product.promtionalPrice !== 0 ?
                    props.shoppingItem.product.promtionalPrice :
                    props.shoppingItem.product.price
                }
              </Typography>
              {props.shoppingItem.product.promtionalPrice !== 0 ?
                <Typography variant="body1" color="inherit" noWrap gutterBottom >
                  &nbsp; Was ${props.shoppingItem.product.price}
                </Typography>
                : ""}
            </div>
            <div style={{ display: "flex" }} className={classes.cardActions}>
              <Typography variant="subtitle2" color="inherit" noWrap gutterBottom >
                <Box color="warning.main">
                  {props.shoppingItem.product.promotion}
                </Box>
              </Typography>
            </div>
            <div style={{ display: "flex" }} className={classes.cardActions}>
              <Typography variant="subtitle2" color="inherit" noWrap gutterBottom >
                <Box color="warning.main">
                  {props.shoppingItem.product.promotionDescription}
                </Box>
              </Typography>
            </div>
          </CardContent>
          <CardActions disableSpacing className={classes.cardActions}>
            <IconButton onClick={() => removeItem(props.shoppingItem.product.id, props.shoppingItem.quantity)} className="align-self-center" disabled={props.shoppingItem.quantity === 0 ? true : false}>
              <RemoveCircleOutlineIcon style={{ fontSize: 35 }} color="action" aria-label="remove" className={classes.icons} />
            </IconButton>
            <TextField value={itemCount === null ? 0 : itemCount} variant="outlined" style={{ width: "60px", height: "50px", cursor: "none" }} />
            <IconButton onClick={() => addItem(props.shoppingItem.product.id, props.shoppingItem.quantity)} className="align-self-center">
              <AddCircleOutlineIcon style={{ fontSize: 35 }} color="action" aria-label="add" className={classes.icons} />
            </IconButton>
          </CardActions>
          <Button variant="outlined" color="primary" className={classes.addToCart}>
            <Typography variant="overline" display="block" style={{ fontWeight: 750 }} gutterBottom >
              Add to cart
        </Typography>
          </Button>
        </Card >
        </Fragment>
  );
}

export default ProductCard;