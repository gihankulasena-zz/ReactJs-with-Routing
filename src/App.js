import React from 'react'

import Header from './Components/Shared/Header'
import Main from './Components/Shared/Main'

import logo from './logo.svg';
import './App.css';

import Grid from 'material-ui/Grid';

const App = () => (
  <Grid container spacing={24}>
    <Grid item xs={12} sm={2}>
      <Header />
    </Grid>
    <Grid item xs={12} sm={10}>
      <Main />
    </Grid>
  </Grid>
)

export default App


