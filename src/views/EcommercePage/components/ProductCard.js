import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui icons
import AddCart from '@material-ui/icons/AddShoppingCart';
// core components
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import Button from 'components/CustomButtons/Button.js';


import styles from 'assets/jss/material-kit-pro-react/views/ecommerceSections/productCardStyle.js';


const useStyles = makeStyles(styles);

export default function ProductCard({ imageUri, name, price, size, description }) {
  const classes = useStyles();
  return (
    <GridItem md={4} sm={6}>
      <Card plain product>
        <CardHeader noShadow image>
          <a href='#pablo'>
            <img src={imageUri} alt={name} className={classes.cardImg}/>
          </a>
        </CardHeader>
        <CardBody plain>
          <a href='#pablo'>
            <h4 className={classes.cardTitle}>{name}</h4>
          </a>
          <p className={classes.description}>
            Tamaño: {size}
          </p>
        </CardBody>
        <CardFooter plain className={classes.cardFooter}>
          <div className={classes.priceContainer}>
            <span className={classes.price}>${price}</span>
          </div>
          <Button color='info'>
            <AddCart /> Agregar al Carrito
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
};
