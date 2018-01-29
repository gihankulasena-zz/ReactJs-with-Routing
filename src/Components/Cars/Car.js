import React from 'react'
import CarAPI from '../../API/CarAPI'

import { Link } from 'react-router-dom'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';

import ArrowBackIcon from 'material-ui-icons/ArrowBack';

// looks up the car using the number parsed from
// the URL's pathname. If no car is found with the given
// number, then a "car not found" message is displayed.
const Car = (props) => {
  const car = CarAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!car) {
    return <div>Sorry, but the car was not found</div>
  }
  return (
    <Grid container spacing={24}>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardMedia
            image={car.media}
            title={car.name} className="cardImage"
          />
          <CardContent>
            <Typography type="headline" component="h2">
              {car.name}
            </Typography>
            <Typography component="p">
              <strong>Model</strong>: {car.model}<br />
              <strong>Make</strong>: {car.make}<br />
              <strong>Year</strong>: {car.year}<br />
              <strong>Price</strong>: {car.price}<br />
            </Typography>
          </CardContent>
          <CardActions>
            <Link to='/cars'>
              <IconButton aria-label="Go Back">
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </CardActions>
        </Card>
      </Grid></Grid>
  )
}

export default Car
