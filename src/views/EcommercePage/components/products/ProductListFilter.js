import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/core components
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// @material-ui icons
import Cached from '@material-ui/icons/Cached';
import Check from '@material-ui/icons/Check';
// core components
import Accordion from 'components/Accordion/Accordion.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button.js';
import Clearfix from 'components/Clearfix/Clearfix.js';

import styles from 'assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js';
import { useSelector, useDispatch } from 'react-redux';
import { startLoadingCategories } from 'views/EcommercePage/actions/categories';
import { filterCategories } from 'views/EcommercePage/actions/filters';
import { filterCategory } from 'views/EcommercePage/actions/filters';


const useStyles = makeStyles(styles);

export default function ProductListFilter({setActivePage}) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(startLoadingCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories);

  const filters = useSelector((state) => state.filters)

  React.useEffect(() => {
    const categoriesFilter = Object.fromEntries(
      categories.map((cat) => [cat.code, false])
    );
    dispatch(filterCategories(categoriesFilter));
  }, [categories, filters, dispatch]);

  const categoryCodeFilter = Object.entries(filters.categories).filter(el => el[1]).map(el2 => el2[0]);

  const handleToggle = (value) => {
    setActivePage();
    dispatch(filterCategory(value));
  };

  const classes = useStyles();

  return (
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
              className={classes.pullRight + ' ' + classes.refineButton}
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
                    {categories.map((cat) => (
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
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                              root: classes.checkRoot,
                            }}
                          />
                        }
                        classes={{ label: classes.label }}
                        label={cat.name}
                      />
                    ))}
                  </div>
                </div>
              ),
            },
          ]}
        />
      </CardBody>
    </Card>
  );
}
