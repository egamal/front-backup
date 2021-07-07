import React from 'react';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import styles from 'assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle.js';
import getGridContent from 'views/EcommercePage/helpers/getGridContent';
import ProductCard from '../ProductCard';


const useStyles = makeStyles(styles);

export default function SectionLatestOffers({ loading, highlightProducts = [] }) {
  const classes = useStyles(); 

  const gridContent = getGridContent(loading, highlightProducts, ProductCard);

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Productos Destacados</h2>
        <GridContainer>
          {gridContent}
        </GridContainer>
      </div>
    </div>
  );
}
