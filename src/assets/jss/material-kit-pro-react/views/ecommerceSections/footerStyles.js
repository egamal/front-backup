// import {
//   blackColor,
//   whiteColor,
//   grayColor,
// } from "assets/jss/material-kit-pro-react.js";
import footerStyles from "assets/jss/material-kit-pro-react/components/footerStyle.js";

const styles = {
  ...footerStyles,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  footerDisplay: {
    "@media (min-width: 992px)": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  footerTitle: {
      fontSize: "18px",
      fontWeight: "500",
  },
  footerImg: {
    "@media (max-width: 992px)": {
      marginTop: "20px",
    },
      
  },
  footerListItem:{
    textAlign: "start",
    marginLeft: "40px",
    fontWeight: "500",
  },
  "@media (max-height: 400px) ":{
    hidden: {
      display: "none",
    },
  },
};

export default styles;
