import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import discoverMix from "assets/img/ecommerce/discover_mix.jpg";
import discoverWines from "assets/img/ecommerce/discover_wines.jpg";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionProducts() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Descubri</h2>
        <GridContainer>
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: `url(${discoverMix})` }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Proba
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>Nuestros Mix</h3>
                </a>
                <p className={classes.description}>
                  Proba nuestros mixes compuestos de diversos frutos
                  secos, frutas glaseadas y demas cosas ricas para
                  esos momentos donde necesitas un plus de energia!
                </p>
                <Button href="#" round color="white">
                  Ir a mixes
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: `url(${discoverWines})` }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Chequea
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>Nuestros Vinos</h3>
                </a>
                <p className={classes.description}>
                  Aca tirame un texto interesante nico para meterle
                  onda a esta seccion, lo ideal es que ocupe tres renglones
                  para mantener el estilo
                </p>
                <Button href="#" round color="white">
                  Ir a vinos
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
