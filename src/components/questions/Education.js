import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField  from 'material-ui/TextField'

class Education extends Component {
    render() {
        return (
            <div className="container">
                <MuiThemeProvider>
                    <React.Fragment>
                        <TextField
                            hintText = "Education Status"
                            floatingLabelText = "Education"
                            onChange = {this.props.onChange}
                            id = 'education'
                            value = {this.props.personal.education}
                        />
                        <br />
                        <TextField
                            hintText = "Cure/Medication History"
                            floatingLabelText = "History"
                            onChange = {this.props.onChange}
                            id = 'history'
                            value = {this.props.personal.history}
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

export default Education
