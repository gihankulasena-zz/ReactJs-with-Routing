import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import CarAPI from '../../API/CarAPI'

// The Cars component matches one of two different routes
// depending on the full pathname
const CarList = () => (
  <div>
    <small>Data calling from API</small>
    <ul>
      {
        CarAPI.all().map(car => (
          <li key={car.id}>
            <Link to={`/cars/${car.id}`}>{car.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default CarList