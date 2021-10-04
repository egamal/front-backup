/*eslint-disable*/
import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/core components
import Tooltip from '@material-ui/core/Tooltip';
// @material-ui/icons
import Close from '@material-ui/icons/Close';
import Remove from '@material-ui/icons/Remove';
import Add from '@material-ui/icons/Add';
// core components
import Button from "components/CustomButtons/Button.js";

import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.js";
import { useDispatch } from 'react-redux';
import { addProductQty, removeProduct, removeProductQty } from '../actions/shoppingCart';

const useStyles = makeStyles(shoppingCartStyle);

export default function getShoppingCartProducts(products) {

  const dispatch = useDispatch();

  const classes = useStyles();

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product))
  }

  const handleRemoveQty = (product) => {
    dispatch(removeProductQty(product))
  }

  const handleAddQty = (product) => {
    dispatch(addProductQty(product))
  }

  const productList = [];
  for (const product in products) {
    productList.push([
      <div className={classes.imgContainer} key={product}>
        <img
          src={products[product].imageUri}
          alt={product}
          className={classes.img}
        />
      </div>,
      <span key={product}>
        <a href='#jacket' className={classes.tdNameAnchor}>
          {product}
        </a>
        <br />
      </span>,
      `${products[product].size}`,
      <span key={product}>
        <small className={classes.tdNumberSmall}>$</small>{' '}
        {products[product].price}
      </span>,
      <span key={product}>
        {`${products[product].quantity} `}
        <div className={classes.buttonGroup}>
          <span onClick={() => handleRemoveQty(product)}>
            <Button color='info' size='sm' round className={classes.firstButton}>
              <Remove />
            </Button>
            </span>
            <span onClick={() => handleAddQty(product)}>
            <Button color='info' size='sm' round className={classes.lastButton}>
              <Add />
            </Button>
          </span>
        </div>
      </span>,
      <span key={product}>
        <small className={classes.tdNumberSmall}>$</small>{' '}
        {products[product].price * products[product].quantity}
      </span>,
      <Tooltip
        key={product}
        id='close1'
        title='Remove item'
        placement='left'
        classes={{ tooltip: classes.tooltip }}
      >
        <span onClick={() => handleRemoveProduct(product)}>
          <Button link className={classes.actionButton}>
            <Close />
          </Button>
        </span>
      </Tooltip>,
    ]);
  }
  return productList;
}
