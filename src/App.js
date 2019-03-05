import React, { Component } from 'react';
import './App.css';
import './Calculator.css'
import  Calculator from './Calculator'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Paper id='title'>
          <Typography variant='h3' align='center'>
            CALCULON
          </Typography>
        </Paper>
        <Calculator />
        <div id='footer'>
          <Chip
            label={`A freeCodeCamp project by Hugh O'Neill`}
            href='https://github.com/huuugh18'
            component='a'
            clickable
          />
        </div>          
      </div>
    );
  }
}



export default App;
