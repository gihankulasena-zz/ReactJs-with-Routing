import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CarList from './Cars/CarList'
import Car from './Cars/Car'

const Cars = () => (
  <Switch>
    <Route exact path='/cars' component={CarList} />
    <Route path='/cars/:number' component={Car} />
  </Switch>
)

export default Cars