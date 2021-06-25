/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountCircle from "@material-ui/icons/AccountCircle";


// core components
import Button from "components/CustomButtons/Button.js";
import LoginModal from "components/LoginModal/LoginModal.js";
import RegisterModal from "components/RegisterModal/RegisterModal.js";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const [loginModal, setLoginModal] = React.useState(false);
  const [registerModal, setRegisterModal] = React.useState(false);

  const onRegister = () => {
    setLoginModal(false);
    setRegisterModal(true);
  }

  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem + " " + classes.shoppingCart}>
        <Button
          color="info"
          target="_blank"
          className={classes.navButton + " " + classes.loginButton}
          round
          onClick={() => { setLoginModal(true) }}
        >
          Login<AccountCircle className={classes.icons + " " + classes.loginIcon} />
        </Button>
      </ListItem>
      <ListItem className={classes.listItem + " " + classes.shoppingCart}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkpr-navbar"
          color="info"
          target="_blank"
          className={classes.navButton + " " + classes.shoppingCartButton}
          justIcon
          round
        >
          <span className={classes.shoppingCartItems}>0</span>
          <ShoppingCart className={classes.icons + " " + classes.shoppingCartIcon} />
        </Button>
      </ListItem>
      <LoginModal opened={loginModal} setOpen={setLoginModal} onRegister={onRegister}/>
      <RegisterModal opened={registerModal} setOpen={setRegisterModal}/>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
