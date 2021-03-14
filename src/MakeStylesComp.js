import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  buttonText: (props) => {
    return {
      color: props.cool ? 'blue' : 'red',
    };
  },
});

const MakeStylesComp = (props) => {
  const classes = useStyles(props);
  return (
    <>
      <Button
        fullWidth
        variant='contained'
        color='primary'
        className={classes.buttonText}
      >
        Click me
      </Button>
    </>
  );
};

export default MakeStylesComp;
