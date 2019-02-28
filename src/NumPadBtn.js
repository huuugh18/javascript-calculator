import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class NumPadButton extends Component {
    handleNumPadClick = () => this.props.onSelect(this.props.value)
    render(){
        return(
            <Button 
                className='num-pad'
                id={this.props.id}
                onClick={this.handleNumPadClick}
                color='primary'
                variant='outlined'
                size='large'
            >
                {this.props.value}
            </Button>
        )
    }
}

export default NumPadButton