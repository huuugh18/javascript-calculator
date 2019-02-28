import React, { Component } from 'react';
import './App.css';
import './Calculator.css'
import  Calculator from './Calculator'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Paper id="title">
          <Typography variant="h3">
            Calculon
          </Typography>
        </Paper>
        <Calculator />          
      </div>
    );
  }
}



export default App;
