import React from 'react';

import styles from '../../../../assets/jss/material-kit-pro-react/views/ecommerceSections/categoriesStyle';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/Grid/GridContainer';
import CategoryItem from './CategoryItem';
import getGridContent from 'views/EcommercePage/helpers/getGridContent';

const useStyles = makeStyles(styles);

export default function SectionCategories({ loading, categories = [] }) {
  const classes = useStyles();

  const gridContent = getGridContent(loading, categories, CategoryItem, 'name');

  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <h2>Categorias</h2>
        <GridContainer className={classes.gridCenter}>
          {gridContent}
        </GridContainer>
      </div>
    </div>
  );
}
