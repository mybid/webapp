import React from 'react';
import { Grid } from '@material-ui/core';
import ItemList from 'components/Item/ItemList/ItemList';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AdvancedFilters from 'components/Item/AdvancedFilters/AdvancedFilters';

const useStyles = makeStyles(theme => ({
  advancedFilters: {
    right: 'auto',
    left: 0,
    position: 'fixed',
    height: '100%',
    display: 'none',
    // If 770px window size value is changed, then also change it for Main Navigation in MainNavigation.jsx
    // Advanced Filters are binded to Main Navigation (disappears on scroll without leaving a weird gap)
    '@media (min-width: 770px)': {
      display: 'flex',
      maxWidth: '30%'
    },
    '@media (min-width: 960px)': {
      maxWidth: '26%'
    },
    '@media (min-width: 1100px)': {
      maxWidth: '24%'
    },
    '@media (min-width: 1200px)': {
      maxWidth: '20%'
    },
    '@media (min-width: 1450px)': {
      maxWidth: '18%'
    }
  },
  itemList: {
    maxWidth: '100%',
    '@media (min-width: 770px)': {
      maxWidth: '70%'
    },
    '@media (min-width: 960px)': {
      maxWidth: '74%'
    },
    '@media (min-width: 1100px)': {
      maxWidth: '76%'
    },
    '@media (min-width: 1200px)': {
      maxWidth: '80%'
    },
    '@media (min-width: 1450px)': {
      maxWidth: '82%'
    }
  }
}));

const ItemsPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={0} justify="flex-end">
        <Grid item className={classes.advancedFilters}>
          <AdvancedFilters />
        </Grid>
        <Grid item className={classes.itemList}>
          <ItemList />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ItemsPage;
