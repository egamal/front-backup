import React from 'react';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import styles from 'assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle.js';
import { HighlightProduct } from './components/HighlightProduct';

const useStyles = makeStyles(styles);

export default function SectionLatestOffers({ loading, highlightProducts }) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Latest Offers</h2>
        <GridContainer>
          {loading
            ? 'Loading...'
            : highlightProducts.map((product) => (
                <HighlightProduct key={product.name} {...product} />
              ))}
        </GridContainer>
      </div>
    </div>
  );
}
