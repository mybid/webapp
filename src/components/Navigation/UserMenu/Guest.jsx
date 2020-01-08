import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  button: {
    margin: '8px 16px'
  }
}));

const Guest = () => {
  const classes = useStyles();

  return (
    <Link to="/signup">
      <Button size="medium" className={classes.button}>
        Prisijungti
      </Button>
    </Link>
  );
};

export default Guest;
