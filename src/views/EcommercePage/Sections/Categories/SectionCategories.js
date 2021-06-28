import React from 'react';

import styles from '../../../../assets/jss/material-kit-pro-react/views/ecommerceSections/categoriesStyle';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/Grid/GridContainer';
import { CategoryItem } from './components/CategoryItem';

const useStyles = makeStyles(styles);

export default function SectionCategories({ categories, loading }) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <h2>Categorias</h2>
                <GridContainer className={classes.gridCenter}>
                    {loading
                        ? 'Loading...'
                        : categories.map((category) => (
                              <CategoryItem key={category.name} {...category} />
                          ))}
                </GridContainer>
            </div>
        </div>
    );
}
