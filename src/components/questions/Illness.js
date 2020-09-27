import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField  from 'material-ui/TextField'


class Illness extends Component {
    render() {
        return (
            <div className="container">
                <MuiThemeProvider>
                    <React.Fragment>
                        <TextField
                            hintText = "Surgery history"
                            floatingLabelText = "Surgery"
                            onChange = {this.props.onChange}
                            id = 'surgery'
                            value = {this.props.personal.surgery}
                        />
                        <br />
                        <TextField
                            hintText = "Current Medication"
                            floatingLabelText = "Medication"
                            onChange = {this.props.onChange}
                            id = 'medication'
                            value = {this.props.personal.medication}
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

export default Illness
