/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionLatestOffers from "./components/homepage/SectionLatestOffers.js";
import SectionProducts from "./components/homepage/SectionProducts.js";
import SectionCategories from "./components/homepage/SectionCategories.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";

import ecommerceHeader from "assets/img/examples/ecommerce-header.jpg";
import logoFooter from "assets/img/ecommerce/logo-foot.png";
import afip from "assets/img/ecommerce/afip.jpg";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceStyle.js";
import { Link } from "react-router-dom";
import useFetch from "./hooks/useFetch/useFetch";
import { useSelector } from "react-redux";



const useStyles = makeStyles(styles);

export default function EcommercePage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const categories = useSelector( state => state.categories);

  const {data, loading} = useFetch('/api/v1/home-page');
    
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Gennari SA"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 80,
          color: "info"
        }}
      />
      <Parallax
        image={require("assets/img/Wine.jpg")}
        filter="ultraDark"
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
              <div className={classes.brand}>
                <h1 className={classNames(classes.title, classes.hidden)}>Gennari</h1>
                <h4 className={classes.hidden}>
                  La <b>calidad</b> que conoc&eacute;s, al <b>precio</b> que quer&eacute;s. Ponele.
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Link to='/product-list'>Productos</Link>
        <SectionLatestOffers loading={loading} highlightProducts={data?.highlightProducts} />
        <SectionProducts />
      </div>
      {/* CATEGORIAS ACA */}
      <SectionCategories categories={categories} />
      <div
        className={classNames(
          classes.subscribeLine,
          classes.subscribeLineImage
        )}
        style={{ backgroundImage: `url(${ecommerceHeader})` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={classNames(classes.mlAuto, classes.mrAuto)}
            >
              <div className={classes.textCenter}>
                <h3 className={classes.title}>SUSCRIBITE Y SÉ EL PRIMERO EN SABER</h3>
                <p className={classes.description}>
                  Obtené nuestras últimas novedades, nuevos productos, ingresos, ofertas. Suscribite hoy.
                </p>
              </div>
              <Card raised className={classes.card}>
                <CardBody className={classes.cardBody}>
                  <form>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6} lg={8}>
                        <CustomInput
                          id="emailPreFooter"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.cardForm
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Mail />
                              </InputAdornment>
                            ),
                            placeholder: "Email..."
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={4}>
                        <Button
                          color="rose"
                          block
                          className={classes.subscribeButton}
                        >
                          suscribirse
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>

      <Footer
          theme="dark"
          content={
            <>
              <div className={classes.footerDisplay}>
                <div className={classes.left}>
                  <Link to="/"
                    className={classes.footerBrand}
                  >
                    <img src={logoFooter} alt="logo_footer" />
                  </Link>
                </div>
                <div className={classes.pullCenter}>
                  <h5 className={classes.footerTitle}>Para consultas y/o compras por mayor contactarse por teléfono o mail a:</h5>
                  <ul>
                    <li className={classes.footerListItem}>0299-4996013</li>
                    <li className={classes.footerListItem}>ventas@gennarisa.com.ar</li>
                    <li className={classes.footerListItem}>Ruta prov 65 Km 1181 / Gral. Fernandez Oro</li>
                    <li className={classes.footerListItem}>Río Negro, Argentina</li>
                  </ul>
                </div>
                <div>
                  <a
                    href="https://www.afip.gob.ar/images/f960/DATAWEB.jpg"
                    target="_blank"
                  >
                    <img src={afip} alt="afip" className={classes.footerImg} />
                  </a>
                </div>
              </div>
              <hr />
                <div className={classes.left}>
                <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="http://blog.creative-tim.com/?ref=mkpr-footer-components"
                        target="_blank"
                        className={classes.block}
                      >
                        Blog
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.creative-tim.com/presentation?ref=mkpr-footer-components"
                        target="_blank"
                        className={classes.block}
                      >
                        Presentation
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="#pablito"
                        onClick={e => e.preventDefault()}
                        className={classes.block}
                      >
                        Discover
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="#pablito"
                        onClick={e => e.preventDefault()}
                        className={classes.block}
                      >
                        Payment
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.creative-tim.com/contact-us?ref=mkpr-footer-components"
                        target="_blank"
                        className={classes.block}
                      >
                        Contact us
                      </a>
                    </ListItem>
                  </List>
                </div>
                <div className={classes.right}>
                  Copyright &copy; {1900 + new Date().getYear()}{" "}
                  <a
                    href="http://www.gennarisa.com/"
                    target="_blank"
                  >
                    Gennari S.A.
                  </a>{" | "}
                  Todos los derechos reservados.
                </div>
            </>
          }
        />
    </div>
  );
}
