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
                            floatingLabelText = "수술 혹은 입원 경험"
                            onChange = {this.props.onChange}
                            id = 'surgery'
                            value = {this.props.personal.surgery}
                        />
                        <br />
                        <TextField
                            hintText = "Current Medication"
                            floatingLabelText = "현재 투약 중인 약물"
                            onChange = {this.props.onChange}
                            id = 'medication'
                            value = {this.props.personal.medication}
                        />

                        <br />
                        <br />
                        <button 
                            style = {btnStyle}
                            onClick = {this.props.onBack}> 
                            Back 
                        </button>
                        <button
                            style = {btnStyle}
                            onClick = {this.props.onContinue}
                        >Continue</button>

                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
    }
}
const btnStyle = {
    margin:'20px',
    color: "#6C2DC7",
    backgroundColor: "white",
    border: "2px solid",
    borderColor: "#6C2DC7",
    fontSize: "13px",
    padding: "8px 13px"
}
export default Illness
