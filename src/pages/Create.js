import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({});

const Create = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography
        color='textSecondary'
        variant='h6'
        component='h2'
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        onClick={() => console.log('Clicked yeah')}
        type='submit'
        color='secondary'
        variant='contained'
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Create;
