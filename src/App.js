import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const drumElements = [
  {id:'Splash', actionKey:'Q', source:'https://audio-previews.elements.envatousercontent.com/files/135160778/preview.mp3'},
  {id:'Parrot', actionKey:'W', source:'https://audio-previews.elements.envatousercontent.com/files/148020959/preview.mp3'},
  {id:'Bird', actionKey:'E', source:'https://audio-previews.elements.envatousercontent.com/files/146374366/preview.mp3'},
  {id:'Horse', actionKey:'A', source:'https://audio-previews.elements.envatousercontent.com/files/136172320/preview.mp3'},
  {id:'Dog', actionKey:'S', source:'https://audio-previews.elements.envatousercontent.com/files/25472138/preview.mp3'},
  {id:'Thunder', actionKey:'D', source:'https://audio-previews.elements.envatousercontent.com/files/140207732/preview.mp3'},
  {id:'Raven', actionKey:'Z', source:'https://audio-previews.elements.envatousercontent.com/files/133547872/preview.mp3'},
  {id:'Sheep', actionKey:'X', source:'https://audio-previews.elements.envatousercontent.com/files/133976703/preview.mp3'},
  {id:'Cow', actionKey:'C', source:'https://audio-previews.elements.envatousercontent.com/files/79938040/preview.mp3'}
]

class App extends Component {
  constructor(){
    super()
    this.state={
        displaySound:'Play Something!'
    }
    this.handleDisplay = this.handleDisplay.bind(this)
  }
  handleDisplay = newSound => {
    this.setState({ displaySound:newSound })
  }

  render() {
    return (
      <div className="App" id="drum-machine">
        <Paper id="display-paper">
          <Typography variant="h3" id="display">
            {this.state.displaySound}
          </Typography>
        </Paper>
        <Paper id="drum-kit">
          {
            drumElements.map(i => (
              <DrumPadElement
                key={i.id} 
                sound={i.id} 
                actionKey={i.actionKey} 
                source={i.source} 
                handleDisplay={this.handleDisplay}
              />
            ))
          }

        </Paper>
      </div>
    );
  }
}

class DrumPadElement extends Component {
  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyDown)
    window.focus()
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }
  handleKeyDown = e => {
    if(e.keyCode === this.props.actionKey.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.sound)
    }
  }
  handleDrumClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.sound)
  }
  render(){
    return(
        <Button 
          className='drum-pad'
          id={this.props.sound}
          onClick={this.handleDrumClick}
          color='primary'
          variant='outlined'
          size='large'
        >
          {this.props.actionKey}
          <audio 
            className={'clip'}
            src={this.props.source} 
            id={this.props.actionKey}
            ref={ref => this.audio = ref}>
          </audio>
        </Button>
    )
  }
}

export default App;
