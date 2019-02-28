import React, { Component } from 'react';
import './App.css';
import './Calculator.css'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Alert from 'react-bootstrap/Alert'

const numbers = [
  {id:'seven', value:'7'},
  {id:'eight', value:'8'},
  {id:'nine', value:'9'},
  {id:'four', value:'4'},
  {id:'five', value:'5'},
  {id:'six', value:'6'},
  {id:'one', value:'1'},
  {id:'two', value:'2'},
  {id:'three', value:'3'},
  {id:'zero', value:'0'},
  {id:'deci', value:'.'}
]
const operators= [
  {id:'add', value:'+'},
  {id:'subtract', value:'-'},
  {id:'multiply', value:'*'},
  {id:'divide', value:'/'},
]
class App extends Component {
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
    console.log('current display value',currentValue)
    // if no numbers then return since nothing to calculate
    if(currentValue === '0'){
      return
    }
    // if formula state empty, then set formula state
    if(this.state.formulaDisplay === ''){
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
  onClickClear = () => this.setState({ mainDisplay:'0',formulaDisplay:''})
  onClickEnter =() => {
    
    this.setState({formulaDisplay: this.state.formulaDisplay + this.state.mainDisplay})
  }
  render() {
    return (
      <div className='App' id="drum-machine">
        <Paper id="title">
          <Typography variant="h3">
            Calculon
          </Typography>
        </Paper>
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
              <NumberButton
                key={i.id}
                id={i.id}
                value={i.value} 
                onSelect={this.onClickNumber}
              />
            ))
          }
          {
            operators.map(i => (
              <OperatorButton 
                key={i.id}
                id={i.id}
                value={i.value}
                onSelect={this.onClickOperator}
              />
            ))
          }
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
      </div>
    );
  }
}


class OperatorButton extends Component {
  
  handleOpClick = () => this.props.onSelect(this.props.value)

  render(){
    return(
        <Button 
          className='num-pad'
          id={this.props.id}
          onClick={this.handleOpClick}
          color='primary'
          variant='outlined'
          size='large'
        >
          {this.props.value}
        </Button>
    )
  }
}


class NumberButton extends Component {
  
  handleNumberPress = () => this.props.onSelect(this.props.value)

  render(){
    return(
        <Button 
          className='num-pad'
          id={this.props.id}
          onClick={this.handleNumberPress}
          color='primary'
          variant='outlined'
          size='large'
        >
          {this.props.value}
        </Button>
    )
  }
}

export default App;
