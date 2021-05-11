import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton, TextField } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ImageC from '../data/Coopers.jpg';
import ImageCL from '../data/CrownLager.jpg';
import ImageTED from '../data/TooheysExtraDry.jpg';
import ImageVB from '../data/VictoriaBitter.jpg';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    minHeight: 470,
    maxHeight: 600,
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
  textBox: {
    height: 100,
    width: 50,
  },
  heading: {
    marginBottom: '20px',
  },
  table: {
    minWidth: 700,
    boxShadow: '3px 3px 5px 6px #90caf9',
  },
  icons: {
    marginTop: 0
  },
  ellipsis: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
}));

const ShoppingTrolley = ({ onUpdateCount, trolleys, promotion }) => {
  const classes = useStyles();
  const [finalTrolley, setFinalTrolley] = useState([]);

  useEffect(() => {
    getShoppingItemsInTrolley();
  }, []);

  const getShoppingItemsInTrolley = () => {
    if (finalTrolley.length > 0) {
      return;
    }
    trolleys.map((item) => {
      if (localStorage.getItem(item.product.id) > 0) {
        item.quantity = Number(localStorage.getItem(item.product.id));
        setFinalTrolley(finalTrolley => [...finalTrolley, trolleys.filter(x => x.product.id === item.product.id)]);
      }
    });
  }

  const getCardMedia = (product) => {
    switch (product.id) {
      case 1:
      default:
        return ImageC;
        break;
      case 2:
        return ImageCL;
        break;
      case 3:
        return ImageTED;
        break;
      case 4:
        return ImageVB;
        break;
    }
  }

  const addItem = (productId, quantity) => {
    trolleys.map((item) => {
      if (item.product.id === productId) {
        item.quantity = ++item.quantity;
        localStorage.setItem(productId, item.quantity);
      }
    });
    onUpdateCount(1);
  }

  const removeItem = (productId, quantity) => {
    trolleys.map((item) => {
      if (item.product.id === productId) {
        item.quantity = --item.quantity;
        localStorage.setItem(productId, --quantity);
      }
    });
    onUpdateCount(-1);
  }

  const totalPriceRow = (productId, unit, qty) => {
    if (productId === 3) {
      let remainder = qty % 2;
      return (Math.floor(qty / 2) + remainder) * unit;
    }
    else {
      return qty * unit;
    }
  }

  const getSubTotalQuantity = () => {
    var qty = 0;
    finalTrolley.map((trolleyItem) => {
      trolleyItem.map((item) => {
        qty += item.quantity;
      })
    });
    return qty;
  }

  const getSubTotal = () => {
    return calculateSubTotal().reduce((acc, val) => { return Number(acc) + Number(val) }, 0).toFixed(2);
  }

  const calculateSubTotal = () => {
    if (finalTrolley.length > 0) {
      return finalTrolley.map((trolleyItem) => {
        return reducer(trolleyItem);
      });
    }
  }
  const reducer = (trolleyItem) => {
    return trolleyItem.reduce((accumulator, trolley) => {
      let price = trolley.product.promtionalPrice !== 0 ? trolley.product.promtionalPrice : trolley.product.price
      return Math.max(accumulator, trolley.quantity * price);
    }, 0)
  }

  const calculateDiscount = () => {
    let subTotal = Number(getSubTotal());
    if (subTotal >= 50) {
      return 5;
    }
    return 0;
  }

  const calculateTotal = () => {
    return (Number(getSubTotal()) - Number(calculateDiscount())).toFixed(2);
  }

  const renderShoppingCart = () => (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              <Typography variant="h6" style={{ fontWeight: 750 }} >
                Details
              </Typography>
            </TableCell>
            <TableCell align="center" colSpan={2}>
              <Typography variant="h6" style={{ fontWeight: 750 }} >
                Price
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">
              <Typography variant="h6" style={{ fontWeight: 525 }} >
                Product
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6" style={{ fontWeight: 525 }} >
                Quantity
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h6" style={{ fontWeight: 525 }} >
                Unit Price
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h6" style={{ fontWeight: 525 }} >
                Sum
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {finalTrolley.map(trolleyItems =>
            trolleyItems.map(trolley =>
              <TableRow key={trolley.product.id}>
                <TableCell align="center"><img style={{ width: "25px", height: "60px" }} src={getCardMedia(trolley.product)}></img></TableCell>
                <TableCell align="left">
                  <Typography variant="subtitle1" display="block" style={{ fontWeight: 750 }} gutterBottom >
                    {trolley.product.brand}
                  </Typography>
                  <Typography variant="body2" display="block" style={{ fontWeight: 500 }} gutterBottom >
                    {trolley.product.name}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.ellipsis}>
                  <IconButton onClick={() => removeItem(trolley.product.id, trolley.quantity)} className="align-self-center" disabled={trolley.quantity === 0 ? true : false}>
                    <RemoveCircleOutlineIcon style={{ fontSize: 25 }} color="action" aria-label="remove" className={classes.icons} />
                  </IconButton>
                  <TextField value={trolley.quantity} variant="outlined" style={{ width: "60px", height: "50px", cursor: "none" }} />
                  <IconButton onClick={() => addItem(trolley.product.id, trolley.quantity)} className="align-self-center">
                    <AddCircleOutlineIcon style={{ fontSize: 25 }} color="action" aria-label="add" className={classes.icons} />
                  </IconButton>
                </TableCell>
                <TableCell align="left">
                  <div style={{ display: "flex" }} >
                    <Typography variant="h6" display="block" style={{ fontWeight: 750 }} gutterBottom noWrap>
                      ${trolley.product.promtionalPrice !== 0 ? trolley.product.promtionalPrice : trolley.product.price}
                    </Typography>
                    {trolley.product.promtionalPrice !== 0 ?
                      <Typography variant="body1" color="inherit" style={{ marginLeft: '10px', marginTop: '5px' }}>
                        &nbsp; Was ${trolley.product.price}
                      </Typography>
                      : "  "}
                  </div>
                  <Typography variant="body2" display="block" style={{ fontWeight: 500 }} gutterBottom >
                    {trolley.product.promotion}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="h6" display="block" style={{ fontWeight: 750 }} gutterBottom >
                    ${totalPriceRow(trolley.product.id, trolley.product.promtionalPrice !== 0 ? trolley.product.promtionalPrice : trolley.product.price, trolley.quantity).toFixed(2)}
                  </Typography>
                </TableCell>
              </TableRow >
            ))
          }
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={1}>
              <Typography variant="h6" style={{ fontWeight: 525 }} >
                SubTotal
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6" style={{ fontWeight: 750 }} >
                {getSubTotalQuantity()}
              </Typography>
            </TableCell>
            <TableCell align="right">{ }</TableCell>
            <TableCell align="left">
              <Typography variant="h6" display="block" style={{ fontWeight: 750 }} gutterBottom >
                ${getSubTotal()}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>
              <Typography variant="h6" style={{ fontWeight: 525 }} >
                Discount
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="subtitle1" style={{ fontWeight: 525 }} >
                {promotion[0]}
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h6" display="block" style={{ fontWeight: 750 }} gutterBottom >
                ${calculateDiscount()}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={1}>
              <Typography variant="h6" style={{ fontWeight: 525 }} >
                Total
              </Typography>
            </TableCell>
            <TableCell colSpan={2}>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h6" display="block" style={{ fontWeight: 750 }} gutterBottom >
                ${calculateTotal()}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Fragment>
      <div>
        <Typography variant="h4" display="block" style={{ fontWeight: 750 }} gutterBottom >
          Shopping Trolley
        </Typography>
        {
          finalTrolley.length === 0
            ?
            <p>Your shopping trolley is currently empty. Why not take advantage of our most popular Beers.</p>
            :
            renderShoppingCart()
        }
      </div>
    </Fragment>
  );
}

export default ShoppingTrolley;