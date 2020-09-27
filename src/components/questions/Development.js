import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField  from 'material-ui/TextField'

class Development extends Component {
    render() {
        return (
            <div className="container">
                <MuiThemeProvider>
                    <React.Fragment>
                        <TextField
                            hintText = "Major Muscle Development"
                            floatingLabelText = "Major Muscle"
                            onChange = {this.props.onChange}
                            id = 'majorMuscle'
                            value = {this.props.personal.majorMuscle}
                        />
                        <br />
                        <TextField
                            hintText = "Minor Muscle Development"
                            floatingLabelText = "Minor Muscle"
                            onChange = {this.props.onChange}
                            id = 'minorMuscle'
                            value = {this.props.personal.minorMuscle}
                        />

                        <br />
                        <br />
                        <button 
                            style = {{margin:15}}
                            onClick = {this.props.onBack}> 
                            Back 
                        </button>
                        <button
                            style = {{margin:15}}
                            onClick = {this.props.onContinue}
                        >Continue</button>

                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Development
