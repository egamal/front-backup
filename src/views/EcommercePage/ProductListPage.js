import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// @material-ui icons
import Cached from '@material-ui/icons/Cached';
import Check from '@material-ui/icons/Check';
// core components
import Accordion from 'components/Accordion/Accordion.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button.js';
import Clearfix from 'components/Clearfix/Clearfix.js';
import Header from 'components/Header/Header.js';
import FooterCommerce from './components/FooterCommerce';
import Pagination from "components/Pagination/Pagination.js";

import HeaderLinks from 'components/Header/HeaderLinks.js';

import styles from 'assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js';
import ProductCard from './components/ProductCard';
import useFetch from './hooks/useFetch/useFetch';
import getGridContent from './helpers/getGridContent';
import { useSelector, useDispatch } from 'react-redux';
import { startLoadingCategories } from './actions/categories';

const useStyles = makeStyles(styles);

export default function ProductListPage() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(startLoadingCategories());
  }, [dispatch]);

  const categories = useSelector( state => state.categories );

  const [selectedCategories, setSelectedCategories] = React.useState({});

  React.useEffect(() => {
    const categoriesFilter = Object.fromEntries(categories.map((cat) => [cat.code, false]));
    setSelectedCategories(categoriesFilter)
  }, [categories])

  const { loading, data: products } = useFetch('/api/v1/products');

  const handleToggle = (value) => {
    setSelectedCategories({
      ...selectedCategories,
      [value]: !selectedCategories[value],
    });
  };
  
  const classes = useStyles();

  const gridContent = getGridContent(loading, products?.content, ProductCard);

  return (
    <div className={classes.backgroundWhite}>
      <Header
        brand='Gennari SA'
        links={<HeaderLinks dropdownHoverColor='info' />}
        color='info'
      />
      <div className={classes.section}>
        <div className={classes.container}>
          <h2>Find what you need</h2>
          <GridContainer>
            <GridItem md={3} sm={3}>
              <Card plain>
                <CardBody className={classes.cardBodyRefine}>
                  <h4 className={classes.cardTitle + ' ' + classes.textLeft}>
                    Refine
                    <Tooltip
                      id='tooltip-top'
                      title='Reset Filter'
                      placement='top'
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        link
                        justIcon
                        size='sm'
                        className={
                          classes.pullRight + ' ' + classes.refineButton
                        }
                      >
                        <Cached />
                      </Button>
                    </Tooltip>
                    <Clearfix />
                  </h4>
                  <Accordion
                    active={[0]}
                    activeColor='rose'
                    collapses={[
                      {
                        title: 'Categorias',
                        content: (
                          <div className={classes.customExpandPanel}>
                            <div
                              className={
                                classes.checkboxAndRadio +
                                ' ' +
                                classes.checkboxAndRadioHorizontal
                              }
                            >
                              {
                                categories.map((cat) => (
                                <FormControlLabel
                                  key={cat.code}
                                  control={
                                    <Checkbox
                                      disableRipple
                                      tabIndex={-1}
                                      onClick={() => handleToggle(cat.code)}
                                      checkedIcon={
                                        <Check className={classes.checkedIcon} />
                                      }
                                      icon={
                                        <Check
                                          className={classes.uncheckedIcon}
                                        />
                                      }
                                      classes={{
                                        checked: classes.checked,
                                        root: classes.checkRoot,
                                      }}
                                    />
                                  }
                                  classes={{ label: classes.label }}
                                  label={cat.name}
                                />
                                ))
                              }
                            </div>
                          </div>
                        ),
                      },
                    ]}
                  />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem md={9} sm={9}>
              <GridContainer>
                {gridContent}
                <GridItem
                  className={classNames(classes.mlAuto, classes.mrAuto, classes.widthAuto)}
                >
                  <Pagination
                    pages={[
                      { text: 'PREV' },
                      { active: true, text: 1 },
                      { text: 2 },
                      { text: 3 },
                      { text: 4 },
                      { text: 5 },
                      { text: 'NEXT' },
                    ]}
                    color='info'
                  />
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <FooterCommerce />
    </div>
  );
}
