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
import { filterCategories, filterCategory } from './actions/filters';

const useStyles = makeStyles(styles);

export default function ProductListPage() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(startLoadingCategories());
  },[dispatch]);

  const categories = useSelector( state => state.categories );

  const filters = useSelector((state) => state.filters)

  const [activePage, setActivePage] = React.useState(1)

  React.useEffect(() => {
    const categoriesFilter = Object.fromEntries(categories.map((cat) => [cat.code, false]));
    dispatch(filterCategories(categoriesFilter))
  }, [categories, filters, dispatch])

  const categoryCodeFilter = Object.entries(filters.categories).filter(el => el[1]).map(el2 => el2[0]);
  
  const url = categoryCodeFilter.length > 0 ? 
    `/api/v1/products?search=category*${categoryCodeFilter.toString()}&page=${activePage - 1}` : 
    `/api/v1/products?page=${activePage - 1}`;

  const { loading, data: products } =  useFetch(url);

  const handleToggle = (value) => {
    setActivePage(1);
    dispatch(filterCategory(value));
  };

  const handlePrevPage = () => {
    if(!products.first){
      setActivePage(activePage - 1)
    }
  }
 
  const handleNextPage = () => {
    if(!products.last){
      setActivePage(activePage + 1)
    }
  }  
  
  const gridContent = getGridContent(loading, products?.content, ProductCard);

  const renderPagination = (totalPages = 0, currentPage) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push({ text: i, active: currentPage === i, onClick: () => setActivePage(i) })
    }
    if (products?.content.length > 0) {
      return (
        <Pagination
          className={classes.center}
          pages={[
            { text: 'PREV', onClick: handlePrevPage },
            ...pages,
            { text: 'NEXT', onClick: handleNextPage },
          ]}
          color='info'
        />
      );
    }
  };

  const classes = useStyles();

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
                                      onChange={() => handleToggle(cat.code)}
                                      checked={categoryCodeFilter.includes(cat.code)}
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
                  className={classNames(classes.mlAuto, classes.mrAuto)}
                >
                  {renderPagination(products?.totalPages, activePage)}
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
