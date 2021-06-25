import {
  section,
  container,
  cardTitle,
  coloredShadow,
  grayColor,
  dangerColor,
  successColor,
  mlAuto
} from "assets/jss/material-kit-pro-react.js";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";
import buttonGroup from "assets/jss/material-kit-pro-react/buttonGroupStyle";

const styles = {
  cardTitle,
  container,
  ...tooltipsStyle,
  ...buttonGroup,
  section: {
    ...section,
    padding: "70px 0px"
  },
  coloredShadow,
  cardDescription: {
    color: grayColor[0],
    textAlign: "center"
  },
  mlAuto,
  priceContainer: {
    display: "inline-flex"
  },
  price: {
    fontSize: "18px",
    color: grayColor[22]
  },
  priceOld: {
    fontSize: "16px",
    textDecoration: "line-through",
    marginRight: "5px"
  },
  priceNew: {
    color: dangerColor[0],
    fontSize: "28px",
    fontWeight: "700",
  },
  stats: {
    color: grayColor[0]
  },
  textCenter: {
    textAlign: "center"
  },
  discount:{
      position: "absolute",
      backgroundColor: successColor[0],
      top: "10px",
      right: "10px",
      padding: "5px",
      fontSize: "16px",
      color: "white",
      fontWeight: "700",
  },
  quantity: {
    display: "flex",
    alignItems: "center",
    "& > input": {
      width: "2rem",
      border: "none",
      textAlign: "center",
      fontSize: "18px",
      color: grayColor[1],
      fontWeight: "700",
    },
  },
  svgMargin: {
    marginRight: "0px !important",
    marginLeft: "4px",
  },
  cardFooter: {
    flexWrap: "wrap",
    justifyContent: "center",
    "& > button": {
      marginTop: "40px",
      width: "75%"
    },
    "& > div > button": {
      paddingLeft: "10px",
      paddingRight: "10px"
    },
  },
  "@media (min-width: 600px) and (max-width: 1000px), (max-width: 330px)" :{
    cardFooter:{
        flexDirection: "column",
          "& > div": {
            marginLeft: "0px",
            marginTop: "20px",
          },
    },
  },
};

export default styles;
