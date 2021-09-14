import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Header from 'components/Header/Header.js';
import FooterCommerce from './components/FooterCommerce';
import Pagination from "components/Pagination/Pagination.js";

import HeaderLinks from 'components/Header/HeaderLinks.js';

import styles from 'assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js';
import ProductCard from './components/ProductCard';
import useFetch from './hooks/useFetch/useFetch';
import getGridContent from './helpers/getGridContent';
import { useSelector } from 'react-redux';
import ProductListFilter from './components/products/ProductListFilter';

const useStyles = makeStyles(styles);

export default function ProductListPage() {
  const [activePage, setActivePage] = React.useState(1)

  const filters = useSelector((state) => state.filters)

  const categoryCodeFilter = Object.entries(filters.categories).filter(el => el[1]).map(el2 => el2[0]);
  
  const url = categoryCodeFilter.length > 0 ? 
    `/api/v1/products?search=category*${categoryCodeFilter.toString()}&page=${activePage - 1}` : 
    `/api/v1/products?page=${activePage - 1}`;

  const { loading, data: products } =  useFetch(url);

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

  const filterSetActivePage = () => {
    setActivePage(1)
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
              <ProductListFilter setActivePage={filterSetActivePage}/>
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
