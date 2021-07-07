import {
  cardTitle,
  grayColor
} from "assets/jss/material-kit-pro-react.js";



const styles = {
  cardTitle: {
    ...cardTitle,
    textAlign: "center",
    marginBottom: "10px !important",
  },
  description: {
    color: grayColor[0],
    fontWeight: "400",
    textAlign: "center",
  },
  priceContainer: {
    display: "inline-flex"
  },
  price: {
    fontSize: "22px",
    color: grayColor[1],
    fontWeight: "700",
    marginBottom: "10px"
  },
  pullRight: {
    float: "right"
  },
  cardFooter: {
    flexDirection: "column",
  },
  cardImg:{
    height: "250px",
  },
};

export default styles;
