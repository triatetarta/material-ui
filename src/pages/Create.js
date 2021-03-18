import React from 'react';
import { Button, Typography } from '@material-ui/core';

const Create = () => {
  return (
    <>
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
        disableElevation
      >
        Submit
      </Button>
    </>
  );
};

export default Create;
