import {
  title,
  main,
  mainRaised,
  mrAuto,
  mlAuto,
  container,
  description,
  blackColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "assets/jss/material-kit-pro-react.js";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.js";
import footerStyles from "assets/jss/material-kit-pro-react/components/footerStyle.js";

const styles = {
  ...imagesStyles,
  ...footerStyles,
  title,
  main,
  mainRaised,
  mrAuto,
  mlAuto,
  description,
  textCenter: {
    textAlign: "center !important"
  },
  container: {
    ...container,
    zIndex: "2"
  },
  brand: {
    "& h1, & h4": {
      color: whiteColor
    }
  },
  card: {},
  subscribeButton: {},
  cardBody: {
    padding: "15px",
    "& form": {
      marginBottom: "0"
    }
  },
  cardForm: {
    margin: "0 0 0 14px",
    padding: 0,
    top: 10
  },
  subscribeLine: {
    padding: "1.875rem 0px",
    "& $card": {
      marginTop: "30px"
    },
    "& form": { margin: "0px" },
    "&$subscribeLineImage:after": {
      position: "absolute",
      zIndex: 1,
      width: "100%",
      height: "100%",
      display: "block",
      left: 0,
      top: 0,
      content: "''",
      backgroundColor: "rgba(" + hexToRgb(blackColor) + ",0.66)"
    }
  },
  subscribeLineImage: {
    position: "relative",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    "& $container": {
      zIndex: 2,
      position: "relative"
    },
    "& $title": {
      color: whiteColor
    },
    "& $description": {
      color: grayColor[0]
    }
  },
  socialFeed: {
    "& p": {
      display: "table-cell",
      verticalAlign: "top",
      overflow: "hidden",
      paddingBottom: "10px",
      maxWidth: 300
    },
    "& i": {
      fontSize: "20px",
      display: "table-cell",
      paddingRight: "10px"
    }
  },
  img: {
    width: "20%",
    marginRight: "5%",
    marginBottom: "5%",
    float: "left"
  },
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
  aClass: {
    textDecoration: "none",
    backgroundColor: "transparent"
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
