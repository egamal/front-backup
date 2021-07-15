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

const useStyles = makeStyles(styles);

export default function ProductListPage() {
  const [checked, setChecked] = React.useState([1, 9, 27]);

  const { loading, data: products } = useFetch('/api/v1/products');

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
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
                        title: 'Categories',
                        content: (
                          <div className={classes.customExpandPanel}>
                            <div
                              className={
                                classes.checkboxAndRadio +
                                ' ' +
                                classes.checkboxAndRadioHorizontal
                              }
                            >
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    disableRipple
                                    tabIndex={-1}
                                    onClick={() => handleToggle(27)}
                                    checked={
                                      checked.indexOf(27) !== -1 ? true : false
                                    }
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
                                label='All'
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    disableRipple
                                    tabIndex={-1}
                                    onClick={() => handleToggle(28)}
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
                                label='Black'
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    disableRipple
                                    tabIndex={-1}
                                    onClick={() => handleToggle(29)}
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
                                label='Blue'
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    disableRipple
                                    tabIndex={-1}
                                    onClick={() => handleToggle(30)}
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
                                label='Brown'
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    disableRipple
                                    tabIndex={-1}
                                    onClick={() => handleToggle(31)}
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
                                label='Gray'
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    disableRipple
                                    tabIndex={-1}
                                    onClick={() => handleToggle(32)}
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
                                label='Green'
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    disableRipple
                                    tabIndex={-1}
                                    onClick={() => handleToggle(33)}
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
                                label='Neutrals'
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    disableRipple
                                    tabIndex={-1}
                                    onClick={() => handleToggle(34)}
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
                                label='Purple'
                              />
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
                      {  text: 3 },
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
