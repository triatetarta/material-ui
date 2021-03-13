import { Grid } from '@material-ui/core';
import React from 'react';
import CoffeeCard from './CoffeeCard';
import data from './data';

const Content = () => {
  return (
    <Grid container spacing={2}>
      {data.map((card, index) => {
        return (
          <Grid key={index} item xs={12} sm={4}>
            <CoffeeCard {...card} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Content;
