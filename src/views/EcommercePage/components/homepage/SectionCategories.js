import React from 'react';

import styles from '../../../../assets/jss/material-kit-pro-react/views/ecommerceSections/categoriesStyle';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/Grid/GridContainer';
import { Link } from 'react-router-dom';
import Card from 'components/Card/Card';
import GridItem from 'components/Grid/GridItem';
import CategoryItem from './CategoryItem';
import getGridContent from 'views/EcommercePage/helpers/getGridContent';
import productsImage from 'assets/img/ecommerce/todos_los_productos.jpg';

const useStyles = makeStyles(styles);

export default function SectionCategories({ categories = [] }) {
  const classes = useStyles();

  const gridContent = getGridContent(false, categories, CategoryItem, 'name');

  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <h2>Categorias</h2>
        <GridContainer className={classes.gridCenter}>
          {gridContent}
          <GridItem xs={12} sm={6} md={3}>
            <h4 className={classes.cardTitle}>Todos los Productos</h4>
            <Link to={"/product-list"}>
                <Card name="Todos los Productos" className={classes.marginTopZero + " " + classes.boxHover}>
                    <img src={productsImage} alt="todos-los-productos" />
                </Card>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
