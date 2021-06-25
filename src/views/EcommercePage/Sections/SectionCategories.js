import React from 'react';
import { categories } from '../../../categories';

import styles from '../../../assets/jss/material-kit-pro-react/views/ecommerceSections/categoriesStyle';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import Card from 'components/Card/Card';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function SectionCategories() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <h2>Categorias</h2>
                <GridContainer className={classes.gridCenter}>
                    {categories.map(({name, img, url}) => (
                        <GridItem key={name} xs={12} sm={6} md={3}>
                            <h4 className={classes.cardTitle}>{name}</h4>
                            <Link to={url}>
                                <Card name={name} className={classes.marginTopZero + " " + classes.boxHover}>
                                    <img src={img} alt={name} />
                                </Card>
                            </Link>
                        </GridItem>
                    ))}
                </GridContainer>
            </div>
        </div>
    );
}
