import React from 'react';
// core components
import Footer from "components/Footer/Footer.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import logoFooter from "assets/img/ecommerce/logo-foot.png";
import afip from "assets/img/ecommerce/afip.jpg";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/footerStyles.js";
import { Link } from "react-router-dom";


const useStyles = makeStyles(styles);

export default function FooterCommerce() {
  const classes = useStyles();
  return (
    <Footer
      theme='dark'
      content={
        <>
          <div className={classes.footerDisplay}>
            <div className={classes.left}>
              <Link to='/' className={classes.footerBrand}>
                <img src={logoFooter} alt='logo_footer' />
              </Link>
            </div>
            <div className={classes.pullCenter}>
              <h5 className={classes.footerTitle}>
                Para consultas y/o compras por mayor contactarse por teléfono o
                mail a:
              </h5>
              <ul>
                <li className={classes.footerListItem}>0299-4996013</li>
                <li className={classes.footerListItem}>
                  ventas@gennarisa.com.ar
                </li>
                <li className={classes.footerListItem}>
                  Ruta prov 65 Km 1181 / Gral. Fernandez Oro
                </li>
                <li className={classes.footerListItem}>Río Negro, Argentina</li>
              </ul>
            </div>
            <div>
              <a
                href='https://www.afip.gob.ar/images/f960/DATAWEB.jpg'
                target='_blank'
                rel="noopener noreferrer"
              >
                <img src={afip} alt='afip' className={classes.footerImg} />
              </a>
            </div>
          </div>
          <hr />
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a
                  href='http://blog.creative-tim.com/?ref=mkpr-footer-components'
                  target='_blank'
                  rel="noopener noreferrer"
                  className={classes.block}
                >
                  Blog
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href='https://www.creative-tim.com/presentation?ref=mkpr-footer-components'
                  target='_blank'
                  rel="noopener noreferrer"
                  className={classes.block}
                >
                  Presentation
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href='#pablito'
                  onClick={(e) => e.preventDefault()}
                  className={classes.block}
                >
                  Discover
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href='#pablito'
                  onClick={(e) => e.preventDefault()}
                  className={classes.block}
                >
                  Payment
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href='https://www.creative-tim.com/contact-us?ref=mkpr-footer-components'
                  target='_blank'
                  rel="noopener noreferrer"
                  className={classes.block}
                >
                  Contact us
                </a>
              </ListItem>
            </List>
          </div>
          <div className={classes.right}>
            Copyright &copy; {1900 + new Date().getYear()}{' '}
            <a href='http://www.gennarisa.com/' target='_blank' rel="noopener noreferrer">
              Gennari S.A.
            </a>
            {' | '}
            Todos los derechos reservados.
          </div>
        </>
      }
    />
  );
};
