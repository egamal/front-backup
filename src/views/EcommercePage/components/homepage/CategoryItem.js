import React from 'react'
import { Link } from 'react-router-dom';

import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';

import styles from '../../../../assets/jss/material-kit-pro-react/views/ecommerceSections/categoriesStyle';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { filterCategory } from 'views/EcommercePage/actions/filters';

const useStyles = makeStyles(styles);

export default function CategoryItem({name, imageUri, code}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = (categoryCode) => {
    dispatch(filterCategory(categoryCode))
  }

  return (
      <GridItem xs={12} sm={6} md={3}>
        <h4 className={classes.cardTitle}>{name}</h4>
        <Link onClick={() => handleClick(code)} to={`/product-list`}>
            <Card name={name} className={classes.marginTopZero + " " + classes.boxHover}>
                <img src={imageUri} alt={name} />
            </Card>
        </Link>
      </GridItem>
  )
}
