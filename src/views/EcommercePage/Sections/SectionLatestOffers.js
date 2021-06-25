import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
import AddCart from '@material-ui/icons/AddShoppingCart';

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle.js";

import almendras from "assets/img/ecommerce/products/almendras.jpg";
import { Add, Remove } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function SectionLatestOffers() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Latest Offers</h2>
        <GridContainer>
          <GridItem md={4} sm={6}>
            <Card product plain>
              <CardHeader image plain>
                <a href="#pablo">
                  <img src={almendras} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${almendras})`, opacity: 1 }}
                />
                <span className={classes.discount}>-20%</span>
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Almendras Grandes</h4>
                <p className={classes.cardDescription}>
                  Tamaño: 500 Grs
                </p>
              </CardBody>
              <CardFooter plain className={classes.cardFooter}>
                <div className={classes.priceContainer}>
                  <span className={classNames(classes.price, classes.priceOld)}>
                    {" "}
                    $1.000
                  </span>
                  <span className={classNames(classes.price, classes.priceNew)}>
                    {" "}
                    $800
                  </span>
                </div>
                <div className={classNames(classes.stats, classes.mlAuto, classes.quantity)}>
                  <Button
                    color="info"
                    size="sm"
                    round
                    className={classes.firstButton}
                  >
                    <Remove className={classes.svgMargin} />
                  </Button>
                  <input type="text" value={1}/>
                  <Button
                    color="info"
                    size="sm"
                    round
                    className={classes.lastButton}
                  >
                    <Add />
                  </Button>
                </div>
                <Button color="info">
                  <AddCart /> Agregar al Carrito
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem md={4} sm={6}>
            <Card product plain>
              <CardHeader image plain>
                <a href="#pablo">
                  <img src={almendras} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${almendras})`, opacity: 1 }}
                />
                <span className={classes.discount}>-20%</span>
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Almendras Grandes</h4>
                <p className={classes.cardDescription}>
                  Tamaño: 500 Grs
                </p>
              </CardBody>
              <CardFooter plain className={classes.cardFooter}>
                <div className={classes.priceContainer}>
                  <span className={classNames(classes.price, classes.priceOld)}>
                    {" "}
                    $1.000
                  </span>
                  <span className={classNames(classes.price, classes.priceNew)}>
                    {" "}
                    $800
                  </span>
                </div>
                <div className={classNames(classes.stats, classes.mlAuto, classes.quantity)}>
                  <Button
                    color="info"
                    size="sm"
                    round
                    className={classes.firstButton}
                  >
                    <Remove className={classes.svgMargin} />
                  </Button>
                  <input type="text" value={1}/>
                  <Button
                    color="info"
                    size="sm"
                    round
                    className={classes.lastButton}
                  >
                    <Add />
                  </Button>
                </div>
                <Button color="info">
                  <AddCart /> Agregar al Carrito
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem md={4} sm={6}>
            <Card product plain>
              <CardHeader image plain>
                <a href="#pablo">
                  <img src={almendras} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${almendras})`, opacity: 1 }}
                />
                <span className={classes.discount}>-20%</span>
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Almendras Grandes</h4>
                <p className={classes.cardDescription}>
                  Tamaño: 500 Grs
                </p>
              </CardBody>
              <CardFooter plain className={classes.cardFooter}>
                <div className={classes.priceContainer}>
                  <span className={classNames(classes.price, classes.priceOld)}>
                    {" "}
                    $1.000
                  </span>
                  <span className={classNames(classes.price, classes.priceNew)}>
                    {" "}
                    $800
                  </span>
                </div>
                <div className={classNames(classes.stats, classes.mlAuto, classes.quantity)}>
                  <Button
                    color="info"
                    size="sm"
                    round
                    className={classes.firstButton}
                  >
                    <Remove className={classes.svgMargin} />
                  </Button>
                  <input type="text" value={1}/>
                  <Button
                    color="info"
                    size="sm"
                    round
                    className={classes.lastButton}
                  >
                    <Add />
                  </Button>
                </div>
                <Button color="info">
                  <AddCart /> Agregar al Carrito
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
