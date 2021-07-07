import React, { useState } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// core components
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import Button from 'components/CustomButtons/Button.js';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui icons
import AddCart from '@material-ui/icons/AddShoppingCart';

import styles from 'assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle.js';
import { Add, Remove } from '@material-ui/icons';

const useStyles = makeStyles(styles);

export default function HighlightProduct({ imageUri, name, price, size, description }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value);
  };

  const handleButtonPlus = () => {
    setQuantity(quantity + 1);
  };

  const handleButtonLess = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const classes = useStyles();
  return (
    <GridItem md={4} sm={6}>
      <Card product plain>
        <CardHeader image plain>
          <a href='#pablo' style={{display: "flex", justifyContent: "center"}}>
            <img src={imageUri} alt={name} style={{height: "250px", width:"250px"}} />
          </a>
          <div
            className={classes.coloredShadow}
            style={{
              backgroundImage: `url(${imageUri})`,
              opacity: 1,
              height: "250px", width:"auto"
            }}
          />
          <span className={classes.discount}>-20%</span>
        </CardHeader>
        <CardBody className={classes.textCenter} plain>
          <h4 className={classes.cardTitle}>{name}</h4>
          <p className={classes.cardDescription}>Tamaño: {size}</p>
        </CardBody>
        <CardFooter plain className={classes.cardFooter}>
          <div className={classes.priceContainer}>
            <span className={classNames(classes.price, classes.priceOld)}>
              {' $' + price}
            </span>
            <span className={classNames(classes.price, classes.priceNew)}>
              {' $' + price * 0.8}
            </span>
          </div>
          <div
            className={classNames(
              classes.stats,
              classes.mlAuto,
              classes.quantity
            )}
          >
            <Button
              color='info'
              size='sm'
              round
              className={classes.firstButton}
              onClick={handleButtonLess}
            >
              <Remove className={classes.svgMargin} />
            </Button>
            <input
              onChange={handleQuantityChange}
              type='text'
              value={quantity}
            />
            <Button
              onClick={handleButtonPlus}
              color='info'
              size='sm'
              round
              className={classes.lastButton}
            >
              <Add />
            </Button>
          </div>
          <Button color='info'>
            <AddCart /> Agregar al Carrito
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
};
