/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.js";

import product1 from "assets/img/product1.jpg";
import FooterCommerce from "./components/FooterCommerce";
import { useSelector } from "react-redux";

const useStyles = makeStyles(shoppingCartStyle);

export default function ShoppingCartPage() {

  const products = useSelector( state => state.shoppingCart );

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const renderProducts = (products) => {
    const productList = [];
    for(const product in products){
      productList.push(
       [<div className={classes.imgContainer} key={product}>
          <img src={products[product].imageUri} alt="..." className={classes.img} />
        </div>,
        <span key={product}>
          <a href="#jacket" className={classes.tdNameAnchor}>
            {product}
          </a>
          <br />
        </span>,
        `${products[product].size}`,
        <span key={product}>
          <small className={classes.tdNumberSmall}>$</small> {products[product].price}
        </span>,
        <span key={product}>
          {`${products[product].quantity} `}
          <div className={classes.buttonGroup}>
            <Button
              color="info"
              size="sm"
              round
              className={classes.firstButton}
            >
              <Remove />
            </Button>
            <Button
              color="info"
              size="sm"
              round
              className={classes.lastButton}
            >
              <Add />
            </Button>
          </div>
        </span>,
        <span key={product}>
          <small className={classes.tdNumberSmall}>$</small> {products[product].price * products[product].quantity}
        </span>,
        <Tooltip
          key={product}
          id="close1"
          title="Remove item"
          placement="left"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button link className={classes.actionButton}>
            <Close />
          </Button>
        </Tooltip>
      ])
    }
    return productList;
  }

  return (
    <div>
      <Header
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info"
        }}
      />

      <Parallax
        image={require("assets/img/examples/bg2.jpg")}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h2 className={classes.title}>Shopping Page</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Card plain>
            <CardBody plain>
              <h3 className={classes.cardTitle}>Shopping Cart</h3>
              <Table
                tableHead={[
                  "",
                  "PRODUCTO",
                  "TAMAÑO",
                  "PRECIO",
                  "CANTIDAD",
                  "SUBTOTAL",
                  ""
                ]}
                tableData={[
                  ...renderProducts(products),
                  {
                    purchase: true,
                    colspan: "3",
                    amount: (
                      <span>
                        <small>€</small>2,346
                      </span>
                    ),
                    col: {
                      colspan: 3,
                      text: (
                        <Button color="info" round>
                          Complete Purchase <KeyboardArrowRight />
                        </Button>
                      )
                    }
                  }
                ]}
                tableShopping
                customHeadCellClasses={[
                  classes.textCenter,
                  classes.description,
                  classes.description,
                  classes.textRight,
                  classes.textRight,
                  classes.textRight
                ]}
                customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
                customCellClasses={[
                  classes.tdName,
                  classes.customFont,
                  classes.customFont,
                  classes.tdNumber,
                  classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
                  classes.tdNumber + " " + classes.textCenter
                ]}
                customClassesForCells={[1, 2, 3, 4, 5, 6]}
              />
            </CardBody>
          </Card>
        </div>
      </div>
      <FooterCommerce />
    </div>
  );
}
