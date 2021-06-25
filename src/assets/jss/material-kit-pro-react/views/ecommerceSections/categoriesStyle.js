import {
    section,
    container,
    cardTitle,
  } from "assets/jss/material-kit-pro-react.js";



const styles = {
    section,
    container,
    cardTitle: {
        ...cardTitle,
        textAlign: "center",        
    },
    marginTopZero:{
        marginTop: "0px",
    },
    boxHover:{
        overflow: "hidden",
        transition: ".5s",
        "&:before":{
            content: '""',
            position: "absolute",
            top: "0",
            left: "-100%",
            width: "100%",
            height: "100%",
            background: "rgba(255,255,255,0.4)",
            transition: "0.5s",
            pointerEvents: "none",
        },
        "&:hover:before":{
            left:"0%",
        },
    },
    gridCenter: {
        justifyContent: "center",
    },
}

export default styles;