/*eslint-disable*/
import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
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

import FooterCommerce from "./components/FooterCommerce";
import { useSelector } from "react-redux";
import getShoppingCartProducts from "./helpers/getShoppingCartProducts";

const useStyles = makeStyles(shoppingCartStyle);

export default function ShoppingCartPage() {

  const products = useSelector( state => state.shoppingCart );

  const [total, setTotal] = useState(0)

  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  // });

  React.useEffect(() => {
    let subTotal = 0; 
    for(const product in products){
      subTotal += products[product].price * products[product].quantity
    }
    setTotal(subTotal)
  }, [products]);

  const classes = useStyles();

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
                  ...getShoppingCartProducts(products),
                  {
                    purchase: true,
                    colspan: '3',
                    amount: (
                      <span>
                        <small>$</small>
                        {total}
                      </span>
                    ),
                    col: {
                      colspan: 3,
                      text:
                        total < 2000 ? (
                          (<span>Compra Minima $2000</span>)
                        ) : (
                          <Button color='info' round>
                            Completar Compra <KeyboardArrowRight />
                          </Button>
                        ),
                    },
                  },
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
