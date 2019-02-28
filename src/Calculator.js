import React, { Component } from 'react';

import NumPadButton from './NumPadBtn'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Alert from 'react-bootstrap/Alert'
import {numbers,operators} from './constants'

class Calculator extends Component {
  constructor(){
    super()
    this.state={
        mainDisplay: '0',
        formulaDisplay:'',
        input:'',
        output:'',
    }
    this.onClickNumber = this.onClickNumber.bind(this)
    this.onClickOperator = this.onClickOperator.bind(this)
    this.onClickDecimal = this.onClickDecimal.bind(this)
    this.onClickClear = this.onClickClear.bind(this)
    this.onClickEnter = this.onClickEnter.bind(this)
  }
  onClickNumber = value => {
    const curVal = this.state.mainDisplay
    // overide current display with new number
    if (curVal === '0' || curVal === '+' || curVal === '-' || curVal === '*' || curVal === '/') {
      return this.setState({ mainDisplay:value })
    }
    // add onto currently displayed number
    return this.setState({mainDisplay: this.state.mainDisplay + value})
  }

  onClickOperator = operator => {
    const currentValue = this.state.mainDisplay
    // if no numbers then return since nothing to calculate
    if(currentValue === '0'){return}
    // if formula state empty, then set formula state
    else if(this.state.formulaDisplay === ''){
      this.setState({
        mainDisplay: operator,
        formulaDisplay: this.state.mainDisplay + ' ' + operator
      })
    }
    // if formula started, then add display number and operator to formula state
    this.setState({
      mainDisplay: operator,
      formulaDisplay: this.state.formulaDisplay + this.state.mainDisplay + ' ' + operator
    })
  }

  onClickDecimal = () => {
    // if already a decimal in the number return
    const curVal = this.state.mainDisplay
    if(curVal.includes('.')){return}
    // otherwise add to number
    return this.setState({mainDisplay:this.state.mainDisplay + '.'})
  }
  onClickClear = () => this.setState({ mainDisplay:'0',formulaDisplay:''})
  onClickEnter =() => {
    this.setState({formulaDisplay: this.state.formulaDisplay + ' ' + this.state.mainDisplay})

  }
  render() {
    return (
        <Paper id='calculator'>
          <Alert 
            variant='secondary'
            id='formula-display'
            style={{marginBottom:0}}
          >
            {this.state.formulaDisplay}
          </Alert>
          <Alert 
            variant='primary' 
            id='display' 
            style={{marginBottom:0}}
          >
            {this.state.mainDisplay}
          </Alert>
          {
            numbers.map(i => (
              <NumPadButton
                key={i.id}
                id={i.id}
                value={i.value} 
                onSelect={this.onClickNumber}
              />
            ))
          }

          {
            operators.map(i => (
              <NumPadButton 
                key={i.id}
                id={i.id}
                value={i.value}
                onSelect={this.onClickOperator}
              />
            ))
          }
          <NumPadButton 
            id={'deci'}
            value={'.'}
            onSelect={this.onClickDecimal}
          >
            .
          </NumPadButton>
          <div id='enter'>
            <Button 
              onClick={this.onClickEnter}
              variant='contained'
              color='primary'
              size='large'
              fullWidth
            >
              Enter
            </Button>
          </div>
          <div id='clear'>
            <Button
              onClick={this.onClickClear}
              variant='contained'
              size='large'
              color='secondary'
              fullWidth
            >
              AC
            </Button>
          </div>
      </Paper>
        
    );
  }
}



export default Calculator;
