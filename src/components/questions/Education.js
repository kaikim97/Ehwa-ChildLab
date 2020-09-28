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
                            floatingLabelText = "아동의 교육기관 재학 여부"
                            onChange = {this.props.onChange}
                            id = 'education'
                            value = {this.props.personal.education}
                        />
                        <br />
                        <TextField
                            hintText = "Cure/Medication History"
                            floatingLabelText = "발달 치료 경험"
                            onChange = {this.props.onChange}
                            id = 'history'
                            value = {this.props.personal.history}
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

export default Education
